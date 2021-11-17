const fetchApi = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return { data }; //access as Object. if you want you can  return data.  // return data
};

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi();
  return products.data; // if not return object. you can just simple  // return products
};

export default getAllProducts;
