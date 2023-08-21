import { Grid, GridItem, Show } from "@chakra-ui/react";
const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem bg={"orange.300"} area={"nav"}>
          nav
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
