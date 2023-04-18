import { useState, useEffect } from "react";
import { User } from "@/types/user";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(user: User) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return { user, login, logout };
}
