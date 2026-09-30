import { ColorModeButton } from "@/components/ui/color-mode";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import Navbar from "./Component/Narbar";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr",
      }}
    >
      <GridItem area="nav" bg="red" p={4}>
        <Navbar />
        {/* <ColorModeButton /> */}
      </GridItem>

      <GridItem
        area="aside"
        bg="blue"
        display={{ base: "none", lg: "block" }}
        p={4}
      >
        side bar
      </GridItem>

      <GridItem area="main" bg="gray" p={4}>
        main body
      </GridItem>
    </Grid>
  );
}
