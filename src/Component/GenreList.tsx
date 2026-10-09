import useGenre from "@/hooks/useGenre";
import { HStack, Image, List, Skeleton, Spinner, Text } from "@chakra-ui/react";
import { warning } from "framer-motion";

const GenreList = () => {
  const { data, isLoading } = useGenre();
  if (isLoading) return <Spinner />;
  return (
    <>
      <List.Root listStyleType="none" padding={3} pr={0}>
        {data.map((genre) => (
          <List.Item key={genre} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="10px"
                src="https://img.gamebrain.co/games/932/game_com_activision_callofduty_warzone_17.png"
              />
              <Text fontSize="md" margin={0} paddingX={5}>
                {genre}
              </Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};
export default GenreList;
