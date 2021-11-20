import { ApiConfig } from "./../../common/types/api";
import { fetchApi } from "../utils/index";

class Config {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  apiUrl: process.env.NEXT_SHOPIFY_STOREFRONT_API,
  fetch: fetchApi,
});

export function getConfig() {
  return configWrapper.getConfig();
}
