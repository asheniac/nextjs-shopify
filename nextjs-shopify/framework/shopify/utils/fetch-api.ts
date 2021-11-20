import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api";

const fetchApi = async <T>({
  url,
  query,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  const res = await fetch(url, {
    method: "POST", //use POST method for Graphql end point. It's a safe bet to use any GraphQL endpoint
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
    //if errors[0].message is null / undefine they will run error.message
    //The operator ?? is checking first left hand expression is null or undefined - >  if it is. return right hand expression
  }

  return { data }; //access as Object. if you want you can  return data.  // return data
};

export default fetchApi;
