import { create } from "zustand";

import { CompanionState } from "../types/companion";

type PlayerStore = {
  state: CompanionState | null;
  connected: boolean;
  initialised: boolean;

  setState: (data: CompanionState) => void;
  setConnected: (value: boolean) => void;
  setInitialised: (value: boolean) => void;
};

export const usePlayerStore = create<PlayerStore>((set)=> ({
  state: null,
  connected: false,
  initialised: false,

  setState: (data) => set({
    state: data,
  }),

  setConnected: (value) => set({
    connected: value,
  }),

  setInitialised: (value) => set({
    initialised: value,
  }),
}));