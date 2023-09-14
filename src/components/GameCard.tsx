import { Card, Heading, Image, CardBody, Text, HStack } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/get-cropped-image";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore criticScore={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
