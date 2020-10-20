// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// import { Context } from "@nuxt/types";
// import { Plugin } from '@nuxt/types'
import { AxiosInstance } from "axios";

declare module '@nuxt/types' {
  interface Context {
    $wp: AxiosInstance
  }
}

export default function ({ $axios }, inject) {
  // console.log($axios)
  // Create a custom axios instance
  const api = $axios.create({
    baseURL:"http://localhost/emes/wp-json/wp/v2/",
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  // api.setBaseURL("http://localhost/emes/wp-json/wp/v2/")

  // Inject to context as $api
  inject('wp', api)
}
