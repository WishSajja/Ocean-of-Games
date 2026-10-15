import type { Gamequery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: Gamequery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading =
    `${gameQuery.genre || ""} ${gameQuery.platform || ""} ${gameQuery.sortOrder || ""}`.trim();

  return (
    <Heading as="h1" fontSize="6xl" fontWeight="bold" marginY={3} mt={0} pt={0}>
      {heading || "Games"}
    </Heading>
  );
};
export default GameHeading;
