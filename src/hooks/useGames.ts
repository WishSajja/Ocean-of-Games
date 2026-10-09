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
  screenshots?: string ;
  cachedAt: string;
}

const useGame = ()=>useData<Game>('/api/games')

export default useGame;


