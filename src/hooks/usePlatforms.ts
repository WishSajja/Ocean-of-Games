import useData from "./useData";

const usePlatorms=()=>useData<string>("/api/games/platforms");

export default usePlatorms;