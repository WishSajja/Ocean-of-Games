import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGame();

  return (
    <>
      {error && <Text className="text-danger">{error}</Text>}
      {/* gap="row-gap column-gap"
       ↓       ↓
      50px    30px */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        gap="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} games={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
