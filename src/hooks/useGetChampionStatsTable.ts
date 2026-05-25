import { useEffect, useState } from "react";
import { apiClient } from "../api/client";

export type ChampionElement = {
  element_id: number;
  element_name: string;
};

export type ChampionStats = {
  champion_id: number;
  champion_name: string;
  pick_rate: number;
  win_rate: number;
  top_elements: ChampionElement[];
};

export type ChampionStatsResponse = ChampionStats[];

const API_ROUTE = "api/localdex/v1/champion-stats";

const useGetChampionStatsTable = () => {
  const [data, setData] = useState<ChampionStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchChampionStats = async () => {
      try {
        const response = await apiClient.get<ChampionStatsResponse>(API_ROUTE, {
          signal: controller.signal,
        });
        setData(response.data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Failed to fetch Player Stats Table data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchChampionStats();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export default useGetChampionStatsTable;
