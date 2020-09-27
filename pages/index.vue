<template>
  <h1>{{prueba}}</h1>
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


  const App = Vue.extend({
    data() {
      return {
        prueba: 'Hola Mundo'
      } 
    },
    methods: {
      init() {
        WooCommerce.get("products/categories")
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

export default App;
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
