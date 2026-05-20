import { create } from "zustand";

import { CompanionState } from "../types/companion";

type PlayerStore = {
  playerState: CompanionState | null;
  connected: boolean;
  initialised: boolean;

  setPlayerState: (data: CompanionState) => void;
  setConnected: (value: boolean) => void;
  setInitialised: (value: boolean) => void;
};

export const usePlayerStore = create<PlayerStore>((set)=> ({
  playerState: null,
  connected: false,
  initialised: false,

  setPlayerState: (data) => set({
    playerState: data,
  }),

  setConnected: (value) => set({
    connected: value,
  }),

  setInitialised: (value) => set({
    initialised: value,
  }),
}));