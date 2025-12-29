import { ParamsType } from "../types";
import { apiConfig } from "../apis/config";
import { ApiUrls } from "../apis/api-urls";
import { CreateProduct, UpdateProduct } from "../types/product";

const api = apiConfig();

export const productService = {
  async getProducts(params: ParamsType) {
    const res = await api.getRequest(ApiUrls.ALL_PRODUCT, params);
    return res;
  },

  async getOneProduct(params: ParamsType, id: string) {
    const res = await api.getRequest(
      `/${ApiUrls.GET_ONE_PRODUCT}/${id}`,
      params
    );
    return res;
  },

  async createProduct(model: CreateProduct) {
    const res = await api.postRequest(ApiUrls.CREATE_PRODUCT, model);
    return res;
  },

  async updateProduct(model: UpdateProduct, id: string) {
    const res = await api.patchRequest(`${ApiUrls.EDIT_PRODUCT}/${id}`, model);
    return res;
  },

  async deleteProduct(id: string) {
    const res = await api.deleteRequest(`${ApiUrls.DELETE_PRODUCT}/${id}`);
    return res;
  },
};
