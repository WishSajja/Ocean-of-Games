import { Badge } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
}

const CriticScore = ({ score }: ScoreProps) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  // let color;
  // if (score > 75) {
  //   color = "green";
  // } else if (score > 60) {
  //   color = "yellow";
  // } else {
  //   color = "red";
  // }

  return (
    <Badge
      colorPalette={color}
      width={7}
      fontSize="14px"
      justifyContent="center"
      bg={`${color}.100`}
    >
      {score}
    </Badge>
  );
};
export default CriticScore;
