import { View, Text } from "react-native";
//import { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { usePlayerStore } from "../store/playerStore";
import { seekTo } from "@/services/companion";

export default function SeekBar(){
    const state = usePlayerStore((state) => state.playerState);

    const progress = state?.player?.videoProgress || 0;
    //const realProgress = state?.player?.videoProgress || 0;
    const duration = state?.video?.durationSeconds || 1;

    /* lags behind realtime
    const [displayProgress, setDisplayProgress] = useState(realProgress);
    useEffect(() => {
        const difference = Math.abs(displayProgress-realProgress);
        if (difference>2){
            setDisplayProgress(realProgress);
        }
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
    */

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
                {/*{Math.floor(displayProgress)}s lags behind realtime */}
                {Math.floor(progress)}
                /
                {duration}s
            </Text>
            <Slider
                minimumValue={0}
                maximumValue={duration}

                //value={displayProgress} lags behind realtime
                value={progress}
                onSlidingComplete={(value) => seekTo(value)}

                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#555"
             />

        </View>
    );
}