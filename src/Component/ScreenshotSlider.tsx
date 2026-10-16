import { useState } from "react";
import { Box, Image, IconButton, HStack } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  screenshots: string[];
}

const GameScreenshotSlider = ({ screenshots }: Props) => {
  const [index, setIndex] = useState(0);

  if (screenshots.length === 0) return null;

  const go = (e: React.MouseEvent, newIndex: number) => {
    e.stopPropagation();
    e.preventDefault();
    setIndex((newIndex + screenshots.length) % screenshots.length);
  };

  return (
    <Box
      position="absolute"
      inset="0"
      bg="black"
      zIndex={2}
      overflow="hidden"
      opacity={0}
      pointerEvents="none"
      transition="opacity 0.25s ease"
      _groupHover={{ opacity: 1, pointerEvents: "auto" }}
    >
      <Box
        display="flex"
        h="100%"
        transform={`translateX(-${index * 100}%)`}
        transition="transform 0.35s ease"
      >
        {screenshots.map((src, i) => (
          <Image
            key={`${src}-${i}`}
            src={src}
            alt={`Screenshot ${i + 1}`}
            flex="0 0 100%"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        ))}
      </Box>

      {screenshots.length > 1 && (
        <>
          <IconButton
            aria-label="Previous screenshot"
            position="absolute"
            left="2"
            top="50%"
            transform="translateY(-50%)"
            size="sm"
            rounded="full"
            bg="blackAlpha.700"
            color="white"
            onClick={(e) => go(e, index - 1)}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            aria-label="Next screenshot"
            position="absolute"
            right="2"
            top="50%"
            transform="translateY(-50%)"
            size="sm"
            rounded="full"
            bg="blackAlpha.700"
            color="white"
            onClick={(e) => go(e, index + 1)}
          >
            <ChevronRight />
          </IconButton>

          <HStack
            position="absolute"
            bottom="2"
            left="50%"
            transform="translateX(-50%)"
            gap="1"
          >
            {screenshots.map((_, i) => (
              <Box
                key={i}
                as="button"
                onClick={(e: React.MouseEvent) => go(e, i)}
                w={i === index ? "16px" : "6px"}
                h="6px"
                borderRadius="full"
                bg={i === index ? "white" : "whiteAlpha.600"}
                transition="all 0.2s"
              />
            ))}
          </HStack>
        </>
      )}
    </Box>
  );
};

export default GameScreenshotSlider;
