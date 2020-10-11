<template>
  <div>
      Esto es un producto
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

    const WooCommerce = new WooCommerceRestApi({
        url: 'http://localhost/emes',
        consumerKey: 'ck_325eca4a49fb6d5f7cc5926c30fe24b902e505d9',
        consumerSecret: 'cs_425299ebef1291e4c4ea09f5b261abfa99a2447d',
        version: 'wc/v3',
        // queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
    })
    

    const ProductView = Vue.extend({
      data() {
        return {
          prueba: 'Hola Mundo'
        } 
      },
      methods: {
        init(): void {
          WooCommerce.get("products?slug=vino-santa-teresa")
          .then((response: any) => {
              console.log(response.data);
              // return res.status(200).json(response.data);
          })
          .catch((error: any) => {
              console.log(error.response.data);
              // return res.status(400).json(error.response.data);
          });
        }
      },
      created() {
        this.init();
      }
    })

  export default ProductView;
</script>

<style>

</style>
