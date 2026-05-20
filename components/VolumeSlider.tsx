import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { usePlayerStore } from "../store/playerStore";
import { setVolume } from "../services/companion";

export default function VolumeSlider(){
    const state = usePlayerStore((state) => state.playerState);

    const volume = state?.player?.volume || 0;

    return (
        <View
            style={{
                width: "100%",
                marginTop: 20,
            }}
        >
            <Text
                style={{
                    color: "white",
                    marginBottom: 10,
                }}
            >
                Volume: {volume}
            </Text>
            <Slider
                minimumValue={0}
                maximumValue={100}
                value={volume}
                onSlidingComplete={(value) => setVolume(value)}
                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#555"
            />

        </View>
    );
}