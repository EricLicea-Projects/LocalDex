import { useEffect, useState } from "react";
import { apiClient } from "../api/client";

const API_ROUTE = "api/localdex/v1/player-profile";

export type PlayerEventHistory = {
  event_id: number;
  start_at: string;
  placement: number;
  wins: number;
  losses: number;
  stalemates: number;
  champion_name: string;
  champion_element: string;
  main_element: string;
};

export type AdvanceElementUsage = {
  element_name: string;
  times_played: number;
};

export type PlayerChampionMastery = {
  champion_id: number;
  champion_name: string;
  events_played: number;
  wins: number;
  losses: number;
  win_rate: number;
};

type PlayerProfileResponse = {
  player_id: number;
  username: string;
  player_cp: number;
  player_rank: number;
  player_emblem: string;
  total_wins: number;
  total_losses: number;
  total_games: number;
  win_rate: number;
  most_played_element: string;
  champion_mastery: PlayerChampionMastery[];
  advanced_element_usage: AdvanceElementUsage[];
  event_history: PlayerEventHistory[];
};

const useGetPlayerProfile = () => {
  const [data, setData] = useState<PlayerProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPlayerProfile = async () => {
      try {
        const response = await apiClient.get<PlayerProfileResponse>(API_ROUTE, {
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

    fetchPlayerProfile();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export default useGetPlayerProfile;
