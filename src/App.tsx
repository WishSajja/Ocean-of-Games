import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
import GenreList from "./Component/GenreList";
import { useState } from "react";
import PlatformSelector from "./Component/PlatformSelector";
import SortSelector from "./Component/SortSelector";

export interface Gamequery {
  genre: string | null;
  platform: string | null;
  sortOrder: string;
}

export default function App() {
  const [GameQuery, setGameQuery] = useState<Gamequery>({} as Gamequery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "1fr 4.8fr",
        }}
      >
        <GridItem area="nav" p={2}>
          <NavBar />
        </GridItem>

        <GridItem area="aside" display={{ base: "none", lg: "block" }} p={0}>
          <GenreList
            selectedGenre={GameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
          />
        </GridItem>

        <GridItem area="main" p={2}>
          <HStack gap={5} mb={5} p={2}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platform })
              }
              selectedPlatform={GameQuery.platform}
            />
            <SortSelector
              SortOrder={GameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid GameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}
