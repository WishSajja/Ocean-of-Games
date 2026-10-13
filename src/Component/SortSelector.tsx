import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface SortSelectorProps {
  SortOrder: string;
  onSelectSortOrder: (sortorder: string) => void;
}

const SortSelector = ({ SortOrder, onSelectSortOrder }: SortSelectorProps) => {
  const sortOrders = [
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
  ];

  const CurrentSortOrder = sortOrders.find((m) => m.value == SortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Sort by: {CurrentSortOrder?.label}
          <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content borderRadius="xl" overflow={"hidden"}>
            {sortOrders.map((sortOrder) => (
              <Menu.Item
                key={sortOrder.value}
                value={sortOrder.value}
                onClick={() => onSelectSortOrder(sortOrder.value)}
              >
                {sortOrder.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default SortSelector;
