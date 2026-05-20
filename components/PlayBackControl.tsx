import { Pressable, View, Text} from "react-native";
import { usePlayerStore } from "@/store/playerStore";
import { nextTrack, playPause, previousTrack } from "@/services/companion";

const buttonStyle = {
  backgroundColor: "#222",
  paddingVertical: 16,
  paddingHorizontal: 20,
  borderRadius: 16,
};

const textStyle = {
  color: "white",
  fontSize: 24,
};

export default function PlayBackControl() {
  const trackState = usePlayerStore((state) => state.state?.player?.trackState);

  return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          gap: 20,
        }}
      >
          <Pressable
            onPress={previousTrack}
            style={buttonStyle}
          >
              <Text style={textStyle}>
                  ⏮
              </Text>
          </Pressable>
          <Pressable
            onPress={playPause}
            style={buttonStyle}
          >
              <Text style={textStyle}>
                  {trackState === 0
                    ? "▶"
                    : "⏸"}
              </Text>
          </Pressable>
          <Pressable
            onPress={nextTrack}
            style={buttonStyle}
          >
              <Text style={textStyle}>
                  ⏭
              </Text>
          </Pressable>

      </View>
  );
}