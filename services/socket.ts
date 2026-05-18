import { io, Socket } from "socket.io-client";

// eslint-disable-next-line import/no-unresolved
import { API_URL, TOKEN } from "@env";

import { usePlayerStore } from "../store/playerStore";

import { CompanionState } from "../types/companion";

let socket: Socket | null = null;

export function connectSocket() {
  if (socket) return socket;

  const {
    setState,
    setConnected,
  } = usePlayerStore.getState();

  socket = io(
    `${API_URL}/realtime`,
    {
      transports: ["websocket"],

      auth: {
        token: TOKEN,
      },
    }
  );

  socket.on(
    "connect",
    () => {
      console.log(
        "Socket connected"
      );

      setConnected(true);
    }
  );

  socket.on(
    "disconnect",
    () => {
      console.log(
        "Socket disconnected"
      );

      setConnected(false);
    }
  );

  socket.on(
    "state-update",
    (
      data: CompanionState
    ) => {
      console.log(
        "Realtime state update"
      );

      setState(data);
    }
  );

  return socket;
}