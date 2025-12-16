import axiosInstance from ".";

export function apiConfig() {
  async function getRequest(url: string, params: object = {}) {
    try {
      const res = await axiosInstance.get(url, { params });
      return res.data;
    } catch (err: any) {
      console.error("GET ERROR:", err.response?.data || err.message);
      throw err;
    }
  }

  async function postRequest(url: string, body: object = {}) {
    try {
      const res = await axiosInstance.post(url, body);
      return res.data;
    } catch (err: any) {
      console.error("POST ERROR:", err.response?.data || err.message);
      throw err;
    }
  }

  async function patchRequest(url: string, body: object = {}) {
    try {
      const res = await axiosInstance.patch(url, body);
      return res.data;
    } catch (err: any) {
      console.error("PATCH ERROR:", err.response?.data || err.message);
      throw err;
    }
  }

  async function deleteRequest(url: string, params: object = {}) {
    try {
      const res = await axiosInstance.delete(url, { params });
      return res.data;
    } catch (err: any) {
      console.error("DELETE ERROR:", err.response?.data || err.message);
      throw err;
    }
  }

  return {
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest,
  };
}
