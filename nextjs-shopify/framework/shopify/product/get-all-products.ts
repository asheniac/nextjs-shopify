import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-product";

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi({ query: getAllProductsQuery });
  return products.data; // if not return object. you can just simple  // return products
};

export default getAllProducts;
