import { Grid, GridItem, Show, Image, HStack, Text } from "@chakra-ui/react";
import logo from "./Assets/logo.webp";
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
          <HStack>
            <Image src={logo} boxSize="80px" />
            <Text>Navigation</Text>
          </HStack>
        </GridItem>
        <GridItem bg={"blue.300"} area={"main"}>
          Main
        </GridItem>
        <Show above="lg">
          <GridItem bg={"pink.300"} area={"aside"}>
            Aside
          </GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default App;
