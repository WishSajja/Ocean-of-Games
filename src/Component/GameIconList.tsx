import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { SiVinted } from "react-icons/si";

interface Props {
  Platforms: string[];
}
const PlatformIconList = ({ Platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    "PlayStation 5": FaPlaystation,
    "Xbox Series X/S": FaXbox,
    Nintendo: SiVinted,
  };

  return (
    <HStack>
      {Platforms.map((platform) => {
        const IconComponent = iconMap[platform.trim()];

        if (!IconComponent) return null;

        return <IconComponent key={platform} />;
      })}
    </HStack>
  );
};
export default PlatformIconList;
