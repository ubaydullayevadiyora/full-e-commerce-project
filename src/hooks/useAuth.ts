import { useMutation } from "@tanstack/react-query";
import { authService } from "../service/auth.service";
import { Login } from "./../types/auth.type";

export const useAuth = () => {
  return useMutation({
    mutationFn: async ({ data, role }: { data: Login; role: string }) =>
      authService.login(data, role),
  });
};
