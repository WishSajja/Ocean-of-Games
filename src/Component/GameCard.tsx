import type { Game } from "@/hooks/useGames";
import { Box, Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./GameIconList";
import CriticScore from "./CriticScore";
import Noimage from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";
import ScreenshotSlider from "./ScreenshotSlider";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  const gm = games.rating ?? 0;
  return (
    <Card.Root
      className="group"
      overflow="hidden"
      position="relative"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-5px)", shadow: "md" }}
    >
      <Box position="relative" height="190px" overflow="hidden">
        <Image
          src={games.imageUrl ?? Noimage}
          alt={games.name}
          width="100%"
          height="190px"
          loading="lazy"
          objectFit="fill"
          objectPosition="center"
        />
        <ScreenshotSlider screenshots={games.screenshots ?? []} />
      </Box>

      <Card.Body mt="auto">
        <HStack justifyContent="space-between" mb={2}>
          <PlatformIconList Platforms={games.platforms ?? []} />
          <CriticScore score={Math.round(gm * 100)} />
        </HStack>
        <Card.Title
          fontFamily="sans-serif"
          fontSize="lg"
          fontWeight="bold"
          padding={0}
          mt="auto"
        >
          {games.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
