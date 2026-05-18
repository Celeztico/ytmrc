import { useEffect } from "react";
import { getState } from "../services/companion";
import { usePlayerStore } from "../store/playerStore";

export function usePlayerSync() {
    const setState = usePlayerStore((state) => state.setState);
    const setConnected = usePlayerStore((state) => state.setConnected);

    useEffect(() => {
        let failedAttempts = 0;

        async function sync() {
            const data = await getState();

            if (data) {
                failedAttempts = 0;
                setState(data);
                setConnected(true);
            } else {
                failedAttempts++;
                if (failedAttempts >= 3){
                    setConnected(false);
                }
            }

        }
        sync();

        const interval = setInterval(sync, 5000);

        return () => clearInterval(interval);
    }, []);
}
