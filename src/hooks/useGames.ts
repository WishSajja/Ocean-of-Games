import type { Gamequery } from "@/App";
import useData from "./useData";


// game interface (game object structure)
export interface Game {
  id: number;
  gameBrainId: number;
  name: string;
  description?: string ;
  releaseDate?: string ;
  rating?: number ;
  ratingCount?: number ;
  imageUrl?: string ;
  gameBrainUrl?: string ;
  developer?: string ;
  genres?: string ;
  platforms?: string[] ;
  screenshots?: string[] ;
  cachedAt: string;
}

const useGame = (gameQuery?:Gamequery)=>useData<Game>('/api/games', {
  params: {
    genre: gameQuery?.genre,
    platform: gameQuery?.platform,
    sortOrder:gameQuery?.sortOrder,
    searchText: gameQuery?.searchText
    }},
     [gameQuery]);

export default useGame;


