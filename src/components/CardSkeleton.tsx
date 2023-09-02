import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const CardSkeleton = () => {
  return (
    <>
      <GameCardContainer>
        <Card height={"300px"}>
          <Skeleton height={"250px"} />
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
};

export default CardSkeleton;
