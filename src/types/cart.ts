export interface CreateCart {
    productId: string;
    quantity: number;
}
export interface UpdateCart {
    quantity?: number;
}
export interface DeleteCart {
    id: string;
}
