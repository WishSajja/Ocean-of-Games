import actionadventure from "../assets/images/action-adventure.png";
import action from "../assets/images/action.png";
import adventure from "../assets/images/adventure.png";
import hackandslash from "../assets/images/hack-and-slash.png";
import inventor from "../assets/images/inventor.png";
import openworld from "../assets/images/open-world.png";
import quiz from "../assets/images/quiz.png";
import racing from "../assets/images/racing.png";
import realtimestrategy from "../assets/images/real-time-strategy.png";
import roleplaying from "../assets/images/role-playing.png";
import shooter from "../assets/images/shooter.png";
import simulation from "../assets/images/simulation.png";
import survival from "../assets/images/survival.png";
import tactical from "../assets/images/tactical.png";

import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  type ImageProps,
} from "@chakra-ui/react";
import { useState } from "react";

interface GenreListProps {
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const [selected, setSelected] = useState(false);
  const data = [
    "Action",
    "Action Adventure",
    "Adventure",
    "Hack and Slash",
    "Open World",
    "Quiz",
    "Racing",
    "Real-time Strategy",
    "Role Playing",
    "Shooter",
    "Simulation",
    "Survival",
    "Tactical",
  ];

  const GenreImageMap: { [key: string]: ImageProps } = {
    "Action Adventure": { src: actionadventure, alt: "actionadventure" },
    Action: { src: action, alt: "action" },
    Adventure: { src: adventure, alt: "adventure" },
    "Hack and Slash": { src: hackandslash, alt: "hackandslash" },
    Inventor: { src: inventor, alt: "inventor" },
    "Open World": { src: openworld, alt: "openworld" },
    Quiz: { src: quiz, alt: "quiz" },
    Racing: { src: racing, alt: "racing" },
    "Real-time Strategy": { src: realtimestrategy, alt: "realtimestrategy" },
    "Role Playing": { src: roleplaying, alt: "roleplaying" },
    Shooter: { src: shooter, alt: "shooter" },
    Simulation: { src: simulation, alt: "simulation" },
    Survival: { src: survival, alt: "survival" },
    Tactical: { src: tactical, alt: "tactical" },
  };

  // if (error) return null;
  // if (isLoading) return <Spinner />;
  return (
    <>
      <Heading
        textAlign="center"
        fontSize="4xl"
        marginBottom={3}
        fontWeight="bold"
        mb={0}
      >
        Genres
      </Heading>
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
                boxSize="40px"
                objectFit="cover"
                overflow="hidden"
                objectPosition="center"
                borderRadius="5px"
                src={GenreImageMap[genre]?.src || ""}
              />

              <Button
                // fontWeight={genre == selectedGenre ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
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
