export interface CreateProduct {
  categoryId: string;
  productName: string;
  description: string;
  price: number;
  disCountPrice: number;
  count: number;
}

export interface UpdateProduct {
  productName?: string;
}

export interface deleteProduct {
  id: string;
}
