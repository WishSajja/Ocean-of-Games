import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardcontainer";
import type { Gamequery } from "@/App";

interface GameGridProps {
  GameQuery: Gamequery;
}

const GameGrid = ({ GameQuery }: GameGridProps) => {
  const { error, data, isLoading } = useGame(GameQuery);
  console.log(data);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard games={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
