import { getRandomInt } from "@/lib/getRandomInt";
import { mages } from "@/lib/data";

import { Selection } from "@kaizen/select";

export type Props = {
  randomInt: number;
  selectedUsers: Selection;
};

export default function Mage({ randomInt, selectedUsers }: Props) {
  return (
    <>
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${
            selectedUsers !== "all" ? selectedUsers.size : 0
          }, minmax(0, 1fr))`,
        }}
      >
        <div
          className="flex items-center justify-center col-span-1"
          style={{ gridColumnStart: randomInt + 1 }}
        >
          <div className="text-6xl">
            {mages[getRandomInt(mages.length)].label}
          </div>
        </div>
      </div>
    </>
  );
}
