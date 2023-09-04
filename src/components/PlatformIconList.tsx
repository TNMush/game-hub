import { Icon, HStack } from "@chakra-ui/react";
import { Platform } from "../Hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiApple, SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";
interface Props {
  platforms: Platform[];
}
interface IStringIndex {
  [key: string]: any;
}
const PlatformIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    xbox: FaXbox,
    playstation: FaPlaystation,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: SiApple,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            as={IconMap[platform.slug]}
            color="gray.500"
            key={platform.id}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
