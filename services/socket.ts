import { io, Socket } from "socket.io-client";

// eslint-disable-next-line import/no-unresolved
import { API_URL, TOKEN } from "@env";
import { usePlayerStore } from "../store/playerStore";
import { CompanionState } from "../types/companion";
import { getState } from "./companion";

let socket: Socket | null = null;

export function connectSocket() {
  if (socket) return socket;

  const {
    setPlayerState,
    setConnected,
    setInitialised,
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
    async () => {
      console.log(
        "Socket connected"
      );

      setConnected(true);

      const initialState = await getState();
      if (initialState){
        setPlayerState(initialState);
        setInitialised(true);
      }

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

      setPlayerState(data);
      //setInitialised(true); idk if this is needed anymore but here just incase something breaks coz ofc it might
    }
  );

  return socket;
}