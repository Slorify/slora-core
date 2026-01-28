import express, { type Express } from "express";
import { config } from "dotenv";
import { routerHandler } from "./route.js";
import { sessionHandler } from "./handlers/sessionHandler.js";
import { fileURLToPath } from "node:url";
import path, { dirname, join } from "node:path";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import {
  attachStatusHandler,
  replayLastStatus,
} from "./handlers/statusHandler.js";
import { migrationService } from "./services/Migration.js";

config();
const port = process.env.PORT;
const app: Express = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

attachStatusHandler();

io.on("connection", (socket) => {
  socket.on("status:subscribe", async (service: string) => {
    await replayLastStatus(socket, service);
  });
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === "production";

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.use(express.json());
app.use(sessionHandler);
app.use("/api/v1", routerHandler);

if (isProd) {
  const clientBuildPath = path.resolve(__dirname, "../../../slora-portal/dist");
  app.use(express.static(clientBuildPath));
  app.get(/.*/, (_, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
  });
}

server.listen(port, async () => {
  console.log(`Application running on: http://localhost:${port}`);

  try {
    await migrationService.autoMigrate();
  } catch (error) {
    console.error("Migration failed:", error);
  }
});

export { io, app };
