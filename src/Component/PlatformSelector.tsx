import usePlatorms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: string | null) => void;
  selectedPlatform?: string | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data } = usePlatorms();
  return (
    <>
      {/* {error && <Text color={"red"}>{error}</Text>} */}
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            {selectedPlatform ? selectedPlatform : "Platform"}
            <FaChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content borderRadius="xl" overflow={"hidden"}>
              {data.map((platform) => (
                <Menu.Item
                  key={platform}
                  value={platform}
                  onClick={() => onSelectPlatform(platform)}
                >
                  {platform}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default PlatformSelector;
