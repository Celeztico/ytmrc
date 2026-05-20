import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { usePlayerStore } from "../store/playerStore";

export default function SeekBar(){
    const state = usePlayerStore((state) => state.state);

    const realProgress = state?.player?.videoProgress || 0;
    const duration = state?.video?.durationSeconds || 1;

    const [displayProgress, setDisplayProgress] = useState(realProgress);
    useEffect(() => {
        setDisplayProgress(realProgress);
    }, [realProgress]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayProgress((prev) => {
                if (prev >= duration){
                    return duration;
                }
                return prev + 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [duration]);

    return (
        <View
            style={{
                width: "100%",
                marginTop: 30,
            }}
        >
            <Text
                style={{
                    color: "white",
                    marginBottom: 10,
                }}
            >
                {Math.floor(displayProgress)}s
                /
                {duration}s
            </Text>
            <Slider
                minimumValue={0}
                maximumValue={duration}

                value={displayProgress}

                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#555"
             />

        </View>
    );
}