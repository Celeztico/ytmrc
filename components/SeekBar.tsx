import { View, Text } from "react-native";
//import { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { usePlayerStore } from "../store/playerStore";
import { seekTo } from "@/services/companion";
import { formatTime } from "@/utils/formatTime";

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
                marginTop: 20,
            }}
        >
            <View>
                <Slider
                    minimumValue={0}
                    maximumValue={duration ?? 1}

                    //value={displayProgress} lags behind realtime
                    value={progress ?? 0}
                    onSlidingComplete={(value) => seekTo(value)}

                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#555"
                />

            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 4,
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        color: "#aaa",
                    }}
                >
                    {/*{Math.floor(displayProgress)}s lags behind realtime */}
                    {formatTime(progress ?? 0)}
                </Text>

                <Text
                    style={{
                        fontSize: 14,
                        color: "#aaa",
                    }}
                >
                    {formatTime(duration ?? 0)}
                </Text>
            </View>
        </View>
    );
}