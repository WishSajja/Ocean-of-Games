import { ColorModeButton } from "@/components/ui/color-mode";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function App() {
  return (
    <>
      <ColorModeButton />
      <Button colorPalette="blue">Click me</Button>
    </>
  );
}
