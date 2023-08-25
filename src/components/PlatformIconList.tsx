import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from "react-icons/bs";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {Platform} from "../entities/platform";

interface Props {
  platforms: Platform[]
}

function PlatformIconList({ platforms }: Props) {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid
  }

  return (
    <HStack marginY={1}>
      {platforms.map(platform => (<Icon as={iconsMap[platform.slug]} color='gray.500' key={platform.id} />))}
    </HStack>
  );
}

export default PlatformIconList;