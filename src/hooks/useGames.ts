import APIClient, {FetchResponse} from "../services/api-client";
import {GameQuery} from "../App";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.getAll({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  })
});

export default useGames;