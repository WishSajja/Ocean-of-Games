import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./GameIconList";
import CriticScore from "./CriticScore";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  // console.log(games.platforms);
  const gm = games.rating ?? 0;
  return (
    <Card.Root
      width="100%"
      height="300px"
      bg="gray.800"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "xl",
      }}
    >
      <Image
        src={games.imageUrl}
        // width="100%"
        height="190px"
        loading="lazy"
        objectFit="cover"
      />
      <Card.Body
        // display="flex"
        // flexDirection="column"
        // justifyContent="flex-end"
        mt="auto"
      >
        <Card.Title fontFamily="sans-serif" fontSize="md" padding={0}>
          {games.name}
        </Card.Title>
        <HStack justifyContent="space-between">
          <PlatformIconList Platforms={games.platforms ?? []} />
          <CriticScore score={Math.round(gm * 100)} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};
export default GameCard;
