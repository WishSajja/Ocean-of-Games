import useData from "./useData";

const useGenre=()=>useData<string>("/api/games/genres");

export default useGenre;