import { Badge } from "@chakra-ui/react";
interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  let color = criticScore > 75 ? "green" : criticScore ? "yellow" : " ";
  return (
    <>
      <Badge padding={1} colorScheme={color} borderRadius={"5px"}>
        {criticScore}
      </Badge>
    </>
  );
};

export default CriticScore;
