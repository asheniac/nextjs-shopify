import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common/";
import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();

  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60, //every 4 hours will revalidate  data
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  //const message:string="Hello Nextjs-shopify"

  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
}

Home.Layout = Layout;
