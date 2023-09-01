import apiClient from "../Services/api-client";
import { useState, useEffect } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
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
