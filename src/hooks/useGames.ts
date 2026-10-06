import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


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
  platforms?: string ;
  screenshots?: string ;
  cachedAt: string;
}

const useGame=()=>{
const [games, setGames]= useState<Game[]>([]);
const [error, setError]= useState("");

 useEffect(()=>{
    const controller = new AbortController();

    apiClient
      .get<Game[]>("/api/games", {signal:controller.signal})
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        if(error instanceof CanceledError)
            return;
        setError(error.message);
      });
      return ()=> controller.abort();

 }, [])
    
 return {error, games};
    
}


export default useGame;


