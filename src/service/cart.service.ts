import { ApiUrls } from "../apis/api-urls";
import { apiConfig } from "../apis/config";
import { ParamsType } from "../types";
import { CreateCart, UpdateCart } from "../types/cart";

const api = apiConfig();

export const cartService = {
  async getCartItems(params: ParamsType) {
    const res = await api.getRequest(ApiUrls.CART_GET_ALL, params);
    return res;
  },

  async getOneCartItem(params: ParamsType, id: string) {
    const res = await api.getRequest(`/${ApiUrls.CART_GET_ONE}/${id}`, params);
    return res;
  },

  async createCartItem(model: CreateCart) {
    const res = await api.postRequest(ApiUrls.CREATE_CART, model);
    return res;
  },

  async editCartItem(model: UpdateCart, id: string) {
    const res = await api.patchRequest(`/${ApiUrls.CART_EDIT}/${id}`, model);
    return res;
  },

  async deleteCartItem(id: string) {
    const res = await api.deleteRequest(`/${ApiUrls.CART_DELETE}/${id}`);
    return res;
  },
};
