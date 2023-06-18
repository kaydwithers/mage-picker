import { Button } from "@kaizen/button";

import { getRandomInt } from "@/lib/getRandomInt";
import { startTexts } from "@/lib/data";

export type Props = {
  onClick: () => void;
};

export default function StartButton({ onClick }: Props) {
  return (
    <Button
      label={startTexts[getRandomInt(startTexts.length)].label}
      primary
      onClick={onClick}
    />
  );
}
