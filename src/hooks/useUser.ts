import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/service/user.service";
import { ParamsType } from "@/types/general";
import { UpdateUser } from "@/types";

export const useUser = (params: ParamsType) => {
  const queryClient = useQueryClient();

  // 1. GET ALL USERS
  const { data: users } = useQuery({
    queryKey: ["users", params],
    queryFn: () => userService.getUsers(params),
  });

  // 2. GET ONE USER (dynamic query)
  const getOneUserQuery = (email: string, params?: ParamsType) =>
    useQuery({
      queryKey: ["user", email],
      queryFn: () => userService.getOneUser(params!, email),
      enabled: !!email,
    });

  // 3. UPDATE USER
  const useUserUpdate = () =>
    useMutation({
      mutationFn: ({ id, data }: { id: string; data: UpdateUser }) =>
        userService.updateUser(data, id),

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });

  // 4. DELETE USER
  const useUserDelete = () =>
    useMutation({
      mutationFn: (id: string) => userService.deleteUser(id),

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });

  return {
    users, // GET ALL
    getOneUserQuery, // GET ONE
    useUserUpdate, // UPDATE
    useUserDelete, // DELETE
  };
};
