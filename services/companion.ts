import axios from "axios";

// eslint-disable-next-line import/no-unresolved
import { API_URL, TOKEN } from "@env";

import { CompanionState } from "../types/companion";

export async function getState():
  Promise<CompanionState | null> {
  try {
    const response = await axios.get(
      `${API_URL}/state`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (error.response?.status === 429) {
      console.log("Rate limited");
      return null;
    }

    console.log("API Error:", error);

    return null;
  }
}

export async function sendCommand(command: string, value?: any) {
  try{
    await axios.post(
      `${API_URL}/command`,
      {
        command,
      },
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
  }catch (error) {
    console.log("Command Error:", error);
  }
}

export function playPause() {
  return sendCommand(
    "playPause"
  );
}

export function nextTrack() {
  return sendCommand(
    "next"
  );
}

export function previousTrack() {
  return sendCommand(
    "previous"
  );
}