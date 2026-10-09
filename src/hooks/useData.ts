import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";



const useData=<T>(endpoint:string)=>{
const [data, setData]= useState<T[]>([]);
const [error, setError]= useState("");
const [isLoading, setIsLoading]= useState(false);

 useEffect(()=>{
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<T[]>(endpoint, {signal:controller.signal})
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
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
    
 return {error, data, isLoading};
    
}


export default useData;