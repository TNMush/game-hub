import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height={"300px"} borderRadius={"6px"} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default CardSkeleton;
