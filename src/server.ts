import express, { type Express } from "express";
import { config } from "dotenv";
import { routerHandler } from "./handlers/route.handler.js";
import { sessionHandler } from "./handlers/sessionHandler.js";
import { fileURLToPath } from "node:url";
import path, { dirname, join } from "node:path";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { logStore } from "./utils/runCmd.js";
import cors from "cors";

config();
const port = process.env.PORT;
const app: Express = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === "production";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(sessionHandler);
app.use("/api/v1", routerHandler);

if (isProd) {
  const clientBuildPath = path.resolve(__dirname, "../../../client/dist");
  app.use(express.static(clientBuildPath));
  app.get(/.*/, (_, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
  });
}

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("subscribe", (channel) => {
    console.log(`Client subscribed to: ${channel}`);

    const logs = logStore[channel];
    if (logs && logs.length > 0) {
      logs.forEach((line) => {
        socket.emit(channel, line);
      });
    }
  });
});

server.listen(port, () => {
  console.log(`Application running on: http://localhost:${port}`);
});

export { io, app };
