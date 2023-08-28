import { Grid, GridItem, Show, Image, HStack, Text } from "@chakra-ui/react";
import logo from "./Assets/logo.webp";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GamesGrid from "./Services/Games-Grid";
const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <HStack justifyContent="space-between" padding="0 20px ">
            <Image src={logo} boxSize="80px" />
            <ColorModeSwitch />
          </HStack>
        </GridItem>
        <GridItem area={"main"}>
          <GamesGrid />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>Aside</GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default App;
