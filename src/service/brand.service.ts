import { ApiUrls } from "../apis/api-urls";
import { apiConfig } from "../apis/config";
import { CreateBrand, ParamsType, UpdateBrand } from "../types";

const api = apiConfig();

export const brandService = {
  async createBrand(model: CreateBrand) {
    const res = await api.postRequest(ApiUrls.CREATE_BREND, model);
    return res;
  },

  async getOneBrand(params: ParamsType, id: string) {
    const res = await api.getRequest(`/${ApiUrls.GET_ONE_BREND}/${id}`, params);
    return res;
  },

  async getAllBrands(params: ParamsType) {
    const res = await api.getRequest(ApiUrls.BREND, params);
    return res;
  },

  async editBrand(model: UpdateBrand, id: string) {
    const res = await api.patchRequest(`/${ApiUrls.BREND_EDIT}/${id}`, model);
    return res;
  },

  //   async deleteBrand(id: string) {
  //     const res = await api.deleteRequest(`/${ApiUrls.BREND_DELETE}/${id}`);
  //     return res;
  //   },
};
