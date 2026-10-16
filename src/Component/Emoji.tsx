import bullseye from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbsup from "../assets/Emojis/thumbs-up.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  const EmojiMap: { [key: number]: ImageProps } = {
    50: { src: meh, alt: "meh" },
    75: { src: thumbsup, alt: "recommended" },
    90: { src: bullseye, alt: "exceptional" },
  };

  return <Image {...EmojiMap[rating]} boxSize="20px" mt={1} />;
};

export default Emoji;
