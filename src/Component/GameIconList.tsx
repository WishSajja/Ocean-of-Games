import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { TbDeviceNintendo } from "react-icons/tb";

interface Props {
  Platforms: string[];
}
const PlatformIconList = ({ Platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    "PlayStation 5": FaPlaystation,
    "Xbox Series X/S": FaXbox,
    Nitendo: TbDeviceNintendo,
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
