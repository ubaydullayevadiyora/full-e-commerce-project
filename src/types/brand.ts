export interface CreateBrand {
  name: string;
  description?: string;
}

export interface UpdateBrand {
  name?: string;
  description?: string;
}
export interface DeleteBrand {
  id: string;
}
