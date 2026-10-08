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
  platforms?: string[] ;
  screenshots?: string ;
  cachedAt: string;
}

const useGame=()=>{
const [games, setGames]= useState<Game[]>([]);
const [error, setError]= useState("");
const [isLoading, setIsLoading]= useState(false);

 useEffect(()=>{
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Game[]>("/api/games", {signal:controller.signal})
      .then((response) => {
        setGames(response.data);
        setIsLoading(false);
        console.log(response.data); // Log the response data to the console
      })
      .catch((error) => {
        if(error instanceof CanceledError)
            return;
        setError(error.message);
        setIsLoading(false);
        // console.log(error.message); // Log the error message to the console
      });
      return ()=> controller.abort();

 }, [])
    
 return {error, games, isLoading};
    
}


export default useGame;


