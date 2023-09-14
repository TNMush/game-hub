import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../Assets/bulls-eye.webp";
import meh from "../Assets/meh.webp";
import thumb from "../Assets/thumbs-up.webp";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumb, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
