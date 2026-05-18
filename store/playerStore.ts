import { create } from "zustand";

import { CompanionState } from "../types/companion";

type PlayerStore = {
  state: CompanionState | null;
  setState: (data: CompanionState) => void;
};

export const usePlayerStore = create<PlayerStore>(
  (set) => ({
    state: null,

    setState: (data) =>
      set({
        state: data,
      }),
  })
);