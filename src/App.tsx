import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";

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
          lg: "1fr 2fr",
        }}
      >
        <GridItem area="nav" p={4}>
          <NavBar />
        </GridItem>

        <GridItem area="aside" display={{ base: "none", lg: "block" }} p={4}>
          side bar
        </GridItem>

        <GridItem area="main" p={4}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
