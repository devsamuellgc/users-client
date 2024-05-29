"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
}

type UserResponse = {
  data: {
    data: User[];
  };
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const users: UserResponse = await axios.get("http://localhost:3000/users");
    setUsers(users.data.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="h-screen bg-white">
      {users &&
        !!users.length &&
        users.map((user) => {
          return (
            <p>
              {user.name} - {user.email}
            </p>
          );
        })}
    </div>
  );
}
