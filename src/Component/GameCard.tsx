import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card.Root
      width="250px"
      height="300px"
      overflow="hidden"
      bg="gray.800"
      borderRadius="10px"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "xl",
      }}
    >
      <Image src={games.imageUrl} height="150px" objectFit="cover" />
      <Card.Body>
        <Card.Header fontSize="lg">{games.name}</Card.Header>
      </Card.Body>
    </Card.Root>
  );
};
export default GameCard;
