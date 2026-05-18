import { Text, View } from 'react-native';
import { usePlayerSync } from '../../hooks/usePlayerSync';
import { usePlayerStore } from '../../store/playerStore';

export default function Home() {
  usePlayerSync();

  const state = usePlayerStore((state) => state.state);
  const connected = usePlayerStore((state) => state.connected);

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

      {state && (
        <>
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            {state.video?.title}
          </Text>

          <Text
            style={{
              color: "#aaa",
              marginTop: 6,
            }}
          >
            {state.video?.author}
          </Text>

          <Text
            style={{
              color: "#888",
              marginTop: 20,
            }}
          >
            Volume:{""}{state.player?.volume}
          </Text>
        </>
      )}

    </View>
  )
}