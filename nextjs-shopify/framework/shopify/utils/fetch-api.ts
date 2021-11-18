type FetchParams = {
  query: string;
};

const fetchApi = async ({ query }: FetchParams) => {
  const url = "http://localhost:4000/graphql";

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
  }

  return { data }; //access as Object. if you want you can  return data.  // return data
};

export default fetchApi;
