"use client";

import { getRandomInt } from "@/lib/getRandomInt";
import { useEffect, useState } from "react";
import { users } from "@/lib/data";

import { Selection } from "@kaizen/select";

import Select from "@/components/Select";
import StartButton from "@/components/StartButton";
import UserList from "@/components/UserList";
import Mage from "@/components/Mage";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [randomInt, setRandomInt] = useState<number>(0);
  const [selectedUsers, setSelectedUsers] = useState<Selection>(
    new Set(users.map((item) => item.value))
  );

  const changeHandler = (keys: Selection) => {
    setSelectedUsers(keys);
  };

  const startHandler = () => {
    setRandomInt(
      getRandomInt(selectedUsers !== "all" ? selectedUsers.size : 0)
    );
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-between px-16 pt-16 w-full">
        <Select
          items={users}
          selectedKeys={selectedUsers}
          onChange={changeHandler}
        />
        <StartButton onClick={startHandler} />
      </div>
      <Mage selectedUsers={selectedUsers} randomInt={randomInt} />
      <UserList items={users} selectedUsers={selectedUsers} />
    </main>
  );
}
