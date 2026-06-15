import { View, Text, Image } from "react-native"
import { usePlayerStore } from "@/store/playerStore";

export default function NowPlayingCard(){
    const video = usePlayerStore(
        (state) => state.playerState?.video
    );

    if(!video){
        return null;
    }

    // taking thumbnail url from video
    const artwork = video.thumbnails?.[
        video.thumbnails.length - 1
    ]?.url;

    return (
        <View
            style={{
                alignItems: "center",
                marginTop: 20,
            }}
        >
            <Text>Now Playing</Text>
            <Image
                source={{
                    uri:artwork
                }}
                style={{
                    width: 220,
                    height: 220,
                    borderRadius: 12,
                }}
            />
            <Text
                style={{
                    color: "white",
                    fontSize: 22,
                    fontWeight: "600",
                    marginTop: 16,
                }}
            >
                {video.title}
            </Text>
            <Text
                style={{
                    color: "#aaa",
                    marginTop: 6,
                }}
            >
                {video.author}
            </Text>
            {video.album && (
                <Text
                    style={{
                    color: "#777",
                    marginTop: 4,
                    }}
                >
                    {video.album}
                </Text>
            )}
        </View>
    );
}