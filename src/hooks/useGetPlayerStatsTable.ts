import { useEffect, useState } from "react";
import { apiClient } from "../api/client";

const API_ROUTE = "api/localdex/v1/player-stats";

type TopChampion = {
  champion_id: number;
  champion_name: string;
  times_played: number;
};

export type PlayerStats = {
  player_id: number;
  username: string;
  player_cp: number;
  games_played: number;
  win_rate: number;
  main_element_id: number;
  main_element: string;
  top_3_champions: TopChampion[];
};

type PlayerStatsTableResponse = PlayerStats[];

const useGetPlayerStatsTable = () => {
  const [data, setData] = useState<PlayerStatsTableResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPlayerStatsTable = async () => {
      try {
        const response = await apiClient.get<PlayerStatsTableResponse>(
          API_ROUTE,
          {
            signal: controller.signal,
          },
        );
        setData(response.data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Failed to fetch Player Stats Table data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerStatsTable();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export default useGetPlayerStatsTable;
