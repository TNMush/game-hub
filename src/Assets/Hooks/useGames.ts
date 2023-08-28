import { useState, useEffect } from "react";
import apiClient from "../../Services/api-client";
interface Game {
  id: number;
  name: string;
}

interface FetchGamesRes {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>();
  const [err, setErr] = useState();
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesRes>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setErr(err.message));

    return () => controller.abort();
  }, []);
  return { games, err };
};

export default useGames;
