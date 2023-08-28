import { Text } from "@chakra-ui/react";
import useGames from "../Assets/Hooks/useGames";

const GamesGrid = () => {
  const { games, err } = useGames();
  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {games?.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </>
  );
};

export default GamesGrid;
