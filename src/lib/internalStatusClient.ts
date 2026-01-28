import { io as ClientIO, Socket } from "socket.io-client";
import { updateStatusFromPhase } from "./statusStore.js";

const SOCKET_URL = process.env.SOCKET_URL || "http://localhost:4000";

let socket: Socket;

export function startInternalStatusClient() {
  socket = ClientIO(SOCKET_URL, {
    transports: ["websocket"],
    reconnection: true,
  });

  socket.on("connect", () => {
    console.log("[status-client] connected");
  });

  // listen to ALL lifecycle events using wildcard
  socket.onAny((event: string, payload: any) => {
    const match = event.match(/^(deploy|start|logs|restart|stop)-(.+)$/);
    if (!match) return;

    const phase = match[1];
    const service = match[2];
    
    if (!phase || !service) return;

    updateStatusFromPhase(service, phase);
  });
}
