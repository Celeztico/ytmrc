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
  } catch (error) {
    console.log("API Error:", error);

    return null;
  }
}