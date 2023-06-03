import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useCallback } from "react";
import paths from "../../routers/paths";

export const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string> => {
      try {
        const { data } = await axios.post<{ token: string }>(
          `${apiUrl}${paths.user}${paths.login}`,
          userCredentials
        );
        return data.token;
      } catch {
        throw new Error("Wrong Credential");
      }
    },
    []
  );
  return {
    getUserToken,
  };
};

export default useUser;
