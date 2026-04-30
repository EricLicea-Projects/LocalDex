import { useEffect, useState } from "react";
import { apiClient } from "../api/client";

const API_ROUTE = "/api/localdex/v1/standings";

export type EventSummary = {
  event_id: number;
  ranked: boolean;
  swiss_match_config: string;
  swiss_rounds: number;
  start_at: string;
  url: string;
};

export type Standing = {
  placement: number;
  username: string;
  player_id: number;
  wins: number;
  losses: number;
  stalemates: number;
  byes: number;
  score: number;
  main_element_id: number;
  champion_id: number;
  main_element: string;
  champion_element: string;
  champion_name: string;
  champion_class: string;
  champion_sub_class: string | null;
};

type MainElementPlayRates = {
  element_name: string;
  times_played: number;
  play_rate: number;
};

export type LatestEventStandingsResponse = {
  event: EventSummary;
  standings: Standing[];
  main_element_play_rates: MainElementPlayRates[];
};

const useLatestEventStandings = () => {
  const [data, setData] = useState<LatestEventStandingsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchStandings = async () => {
      try {
        const response = await apiClient.get<LatestEventStandingsResponse>(
          API_ROUTE,
          {
            signal: controller.signal,
          },
        );
        setData(response.data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Failed to fetch Event Standings data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export default useLatestEventStandings;
