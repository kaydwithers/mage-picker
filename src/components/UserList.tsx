import { backgrounds } from "@/lib/data";
import { Heading } from "@kaizen/typography";
import { Selection } from "@kaizen/select";
import { Data } from "@/lib/data";

export type Props = {
  items: Array<Data>;
  selectedUsers: Selection;
};

export default function UserList({ items, selectedUsers }: Props) {
  const users = items.filter((item) => new Set(selectedUsers).has(item.value));

  return (
    <div
      className="grid w-full h-64"
      style={{
        gridTemplateColumns: `repeat(${
          selectedUsers !== "all" ? selectedUsers.size : 0
        }, minmax(0, 1fr))`,
      }}
    >
      {users.map((item, index) => (
        <div
          className={`flex justify-center items-center flex-1 ${backgrounds[index]?.label}`}
          key={item.value}
        >
          <div className="flex justify-center -rotate-90">
            <Heading variant="heading-2" color="white">
              {item.label}
            </Heading>
          </div>
        </div>
      ))}
    </div>
  );
}
