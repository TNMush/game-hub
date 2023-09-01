import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import { useState } from "react";

const GamesGrid = () => {
  const { games, err } = useGames();

  return (
    <>
      {/*err && <Text>{err}</Text>*/}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding={10}
        spacing={10}
      >
        {games?.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
