import { ImageConnection } from "./../schema.d";
import { Product as ShopifyProduct, ImageEdge } from "../schema";
import { Product } from "@common/types/product";

//normalize images
export function normalizeProductImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}

//normalize products//
export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode;
  const product = {
    id,
    name,
    vendor,
    description,
    images: normalizeProductImages(imageConnection),
    path: `/${handle}`, //shopify version of product-title,save as normal params.
    slug: handle.replace(/^\/+|\/+$/g, ""),
    ...rest,
  };

  return product;
}
