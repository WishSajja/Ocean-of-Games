import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text className="text-danger">{error}</Text>}
      {/* gap="row-gap column-gap"
       ↓       ↓
      50px    30px */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap="10px"
      >
        {/* loading skeletons */}
        {isLoading && skeletons.map((skeleton) => <GameCardSkeleton />)}
        {games.map((game) => (
          <GameCard key={game.id} games={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
