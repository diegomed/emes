<template>
  <div>
    <div class="bg-primary py-3">
      <h3 class="p-3 text-white text-center font-weight-normal">Categoría: <b>Bebidas</b></h3>
    </div>
    <b-container class="mt-5">
      <b-row>
        <b-col  cols="12" md="4" lg="3">
          <div>
            <h5>Categorías</h5>
            <ul>
              <li>Link</li>
            </ul>
          </div>
        </b-col>
        <b-col cols="12" md="8" lg="9">
          <b-row>
            <b-col cols="6" md="4" lg="3" >
              <Product/>
            </b-col>
            <b-col cols="6" md="4" lg="3" >
              <Product/>
            </b-col>
            <b-col cols="6" md="4" lg="3" >
              <Product/>
            </b-col>
            <b-col cols="6" md="4" lg="3" >
              <Product/>
            </b-col>
            <b-col cols="6" md="4" lg="3" >
              <Product/>
            </b-col>
          </b-row>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // import WooCommerce from 'middleware/woocommerce';

    

    const Categories = Vue.extend({
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

  export default Categories;
</script>

<style>

</style>
