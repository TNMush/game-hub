import { Grid, GridItem, Show, Image, HStack, Text } from "@chakra-ui/react";
import logo from "./Assets/logo.webp";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GamesGrid from "./components/Games-Grid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <HStack justifyContent="space-between" padding="0 20px 0 0">
            <Image src={logo} boxSize="80px" />
            <ColorModeSwitch />
          </HStack>
        </GridItem>
        <GridItem area={"main"}>
          <GamesGrid selectedGenre={selectedGenre} />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default App;
