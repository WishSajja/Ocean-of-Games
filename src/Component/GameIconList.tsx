import { HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { TbDeviceNintendo } from "react-icons/tb";
import { FaApple } from "react-icons/fa";

interface Props {
  Platforms: string[];
}
const PlatformIconList = ({ Platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    "PlayStation 5": FaPlaystation,
    "Xbox Series X/S": FaXbox,
    Nitendo: TbDeviceNintendo,
    mac: FaApple,
  };

  return (
    <HStack>
      {Platforms.map((platform) => {
        const IconComponent = iconMap[platform.trim()];

        if (!IconComponent) return null;

        return <IconComponent key={platform} color="gray.500" />;
      })}
    </HStack>
  );
};
export default PlatformIconList;
