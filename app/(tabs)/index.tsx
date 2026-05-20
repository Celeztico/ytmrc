import { Text, View } from 'react-native';
import { usePlayerStore } from '../../store/playerStore';
import PlayBackControl from '../../components/PlayBackControl';
import VolumeSlider from '../../components/VolumeSlider';
import SeekBar from '../../components/SeekBar';

export default function Home() {
  const state = usePlayerStore((state) => state.playerState);
  const initialised = usePlayerStore((state) => state.initialised);
  const connected = usePlayerStore((state) => state.connected);

  if (!initialised) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#111',
      }}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        Loading...
      </Text>
    </View>
    );
}

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#111',
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        {connected ? "Connected" : "Disconnected"}
      </Text>

      {state?.video !== null ? (
        <>
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            {state?.video?.title}
          </Text>

          <Text
            style={{
              color: "#aaa",
              marginTop: 6,
            }}
          >
            {state?.video?.author}
          </Text>
          <SeekBar />
          <PlayBackControl />
          <VolumeSlider />
        </>
      ) : (
        <Text
          style={{
            color: "#888",
            marginTop: 20,
          }}
        >
          No active playback
        </Text>
      )}

    </View>
  )
}