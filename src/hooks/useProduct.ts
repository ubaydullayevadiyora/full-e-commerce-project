import { ParamsType } from "../types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "../service/product.service";
import { CreateProduct } from "../types/product";

export const useProduct = (params: ParamsType) => {
  const queryClient = useQueryClient();

  // 1. GET ALL PRODUCTS
  const { data: products } = useQuery({
    queryKey: ["products", params],
    queryFn: () => productService.getProducts(params),
  });

  // 2. GET ONE PRODUCT (dynamic query)
  const getOneProductQuery = (id: string, params?: ParamsType) =>
    useQuery({
      queryKey: ["product", id],
      queryFn: () => productService.getOneProduct(params!, id),
      enabled: !!id,
    });

  // 3. CREATE PRODUCT
  const createProductMutation = () =>
    useMutation({
      mutationFn: (data: CreateProduct) => productService.createProduct(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
    });

  // 4. UPDATE PRODUCT
  const updateProductMutation = () =>
    useMutation({
      mutationFn: ({ id, data }: { id: string; data: CreateProduct }) =>
        productService.updateProduct(data, id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
    });

  // 5. DELETE PRODUCT
  const deleteProductMutation = () =>
    useMutation({
      mutationFn: (id: string) => productService.deleteProduct(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
    });

  return {
    products, // GET ALL
    getOneProductQuery, // GET ONE
    createProductMutation, // CREATE
    updateProductMutation, // UPDATE
    deleteProductMutation, // DELETE
  };
};
