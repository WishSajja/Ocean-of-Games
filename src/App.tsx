import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
import GenreList from "./Component/GenreList";

export default function App() {
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
          <GenreList />
        </GridItem>

        <GridItem area="main" p={2}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
