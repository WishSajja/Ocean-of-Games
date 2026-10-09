import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width="100%" overflow="hidden" borderRadius="10px">
      {children}
    </Box>
  );
};
export default GameCardContainer;
