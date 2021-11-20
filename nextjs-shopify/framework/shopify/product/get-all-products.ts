import {
  fetchApi,
  normalizeProduct,
  getAllProductsQuery,
} from "../utils/index";

import { ProductConnection } from "../schema";

import { Product } from "@common/types/product";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  //normalize products
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? []; //if no products return a  empty array

  return products; // if not return object. you can just simple  // return products
};

export default getAllProducts;
