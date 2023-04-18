import { createContext, useContext } from "react";
import { User } from "../types/user";

interface UserState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserState | null>(null);

export function useUser() {
  return useContext(UserContext);
}

export default UserContext;
