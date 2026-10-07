import type { Game } from "@/hooks/useGames";
// import { FaWindows, FaXbox, FaPlaystation } from "react-icons/fa";
// import { BsGlobe } from "react-icons/bs";

import { Card, Image } from "@chakra-ui/react";
import PlatformIconList from "./GameIconList";
// import PlatformIconList from "./GameIconList";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  // console.log(games.platforms);
  return (
    <Card.Root
      width="100%"
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
        <Card.Header fontSize="lg" padding={0}>
          {games.name}
          <PlatformIconList Platforms={games.platforms ?? []} />
        </Card.Header>
      </Card.Body>
    </Card.Root>
  );
};
export default GameCard;
