import useGenre from "@/hooks/useGenre";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import { useState } from "react";

interface GenreListProps {
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const [selected, setSelected] = useState(false);
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List.Root listStyleType="none" padding={3} pr={0}>
        <List.Item>
          <Button
            color={selected ? "white" : "gray"}
            _hover={{
              textDecoration: "underline",
            }}
            onClick={() => {
              onSelectGenre(null);
              setSelected(!selected);
            }}
            variant="plain"
          >
            All Categories
          </Button>
        </List.Item>
        {data.map((genre) => (
          <List.Item key={genre} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="10px"
                src="https://img.gamebrain.co/games/932/game_com_activision_callofduty_warzone_17.png"
              />
              <Button
                // fontWeight={genre == selectedGenre ? "bold" : "normal"}
                fontSize="md"
                margin={0}
                paddingX={5}
                variant="plain"
                color={genre == selectedGenre ? "white" : "gray.500"}
                _hover={{
                  textDecoration: "underline",
                  color: "white",
                }}
                onClick={() => {
                  onSelectGenre(genre);
                  setSelected(false);
                }}
              >
                {genre}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};
export default GenreList;
