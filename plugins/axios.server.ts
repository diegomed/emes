import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Context } from "@nuxt/types";
import { Plugin } from '@nuxt/types'
import axios, { AxiosInstance } from "axios";

declare module '@nuxt/types' {
  interface Context {
    $axios: AxiosInstance
  }
}

export default function (context: Context, inject: any) {
    const instance = axios.create({
      baseURL:"http://localhost/emes/wp-json/wp/v2/"
    })
    inject('axios', instance);
}
