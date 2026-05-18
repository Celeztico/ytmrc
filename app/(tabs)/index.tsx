import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { getState } from "../../services/companion";

export default function Home() {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    async function loadState() {
      const data = await getState();

      console.log(data);

      setState(data);
    }

    loadState();
  }, []);

  return (
    <View
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#111",
  }}
>
  {state ? (
    <>
      <Text
        style={{
          fontSize: 22,
          marginBottom: 12,
          color: "#0f0",
        }}
      >
        Connected to YTMDesktop
      </Text>

      <Text>
        Song: {state.video?.title || "Unknown"}
      </Text>

      <Text>
        Artist: {state.video?.author || "Unknown"}
      </Text>

      <Text>
        Album: {state.video?.album || "Unknown"}
      </Text>

      <Text>
        Volume: {state.player?.volume}
      </Text>
    </>
  ) : (
    <Text>Loading...</Text>
  )}
</View>
  );
}