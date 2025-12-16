import { ApiUrls } from "../apis/api-urls";
import { apiConfig } from "../apis/config";
import { Login, Logout, Register } from "../types/auth.type";

const api = apiConfig();

export const authService = {
  async login(model: Login, role: string) {
    return await api.postRequest(`/${role}${ApiUrls.LOGIN}`, model);
  },

  async register(model: Register, role: string) {
    return await api.postRequest(`/${role}${ApiUrls.REGISTER}`, model);
  },

  async logout(model: Logout, role: string) {
    return await api.postRequest(`/${role}${ApiUrls.LOGOUT_BY_ID}`, model);
  },
};
