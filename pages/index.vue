<template>
  <div>
    <Carousel/>
    <b-container>
      <b-row>
        <h3 class="pa3 gray">Productos destacados</h3>
      </b-row>
      <b-row>
        <b-col>
          <Product/>
        </b-col>
        <b-col>
          <Product/>
        </b-col>
        <b-col>
          <Product/>
        </b-col>
        <b-col>
          <Product/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // import WooCommerce from 'middleware/woocommerce';

    

    const App = Vue.extend({
      data() {
        return {
          prueba: 'Hola Mundo'
        } 
      },
      methods: {
        init(): void {
          // WooCommerce.get("products/categories")
          // .then((response: any) => {
          //     console.log(response.data);
          //     // return res.status(200).json(response.data);
          // })
          // .catch((error: any) => {
          //     console.log(error.response.data);
          //     // return res.status(400).json(error.response.data);
          // });
        }
      },
      created() {
        this.init();
      }
    })

  export default App;
</script>

<style>

</style>
