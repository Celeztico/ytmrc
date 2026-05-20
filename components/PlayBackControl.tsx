import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { usePlayerStore } from "@/store/playerStore";
import { nextTrack, playPause, previousTrack } from "@/services/companion";

const buttonStyle = {
  backgroundColor: "#222",
  paddingVertical: 16,
  paddingHorizontal: 20,
  borderRadius: 16,
};

export default function PlayBackControl() {
  const trackState = usePlayerStore((state) => state.playerState?.player?.trackState);

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
        <Ionicons
          name="play-skip-back"
          size={28}
          color="white"
        />
      </Pressable>
      <Pressable
        onPress={playPause}
        style={buttonStyle}
      >
        <Ionicons
          name={
            trackState === 0
              ? "play"
              : "pause"
          }
          size={28}
          color="white"
        />
      </Pressable>
      <Pressable
        onPress={nextTrack}
        style={buttonStyle}
      >
        <Ionicons
          name="play-skip-forward"
          size={28}
          color="white"
        />
      </Pressable>

    </View>
  );
}