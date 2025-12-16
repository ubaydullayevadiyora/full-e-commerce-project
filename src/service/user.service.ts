import { ApiUrls } from "../apis/api-urls";
import { apiConfig } from "../apis/config";
import { UpdateUser } from "../types";
import { ParamsType } from "../types/general";

const api = apiConfig();

export const userService = {
  async getUsers(params: ParamsType) {
    const res = await api.getRequest(ApiUrls.GETUSER, params);
    return res;
  },

  async getOneUser(params: ParamsType, email: string) {
    const res = await api.getRequest(`/${ApiUrls.GETONEUSER}/${email}`, params);
    return res;
  },

  async updateUser(model: UpdateUser, id: string) {
    const res = await api.patchRequest(`/${ApiUrls.UPDATE}/${id}`, model);
    return res;
  },

  async deleteUser(id: string) {
    const res = await api.deleteRequest(`/${ApiUrls.DELETE}/${id}`);
    return res;
  },
};
