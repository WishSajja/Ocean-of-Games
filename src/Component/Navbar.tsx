import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={2}>
      <Image src={logo} boxSize="60px" />
      <input className="form-control" type="text" placeholder="search games" />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
