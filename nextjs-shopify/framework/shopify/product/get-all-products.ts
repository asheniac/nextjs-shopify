import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-product";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  //normalize products
  return data.products; // if not return object. you can just simple  // return products
};

export default getAllProducts;
