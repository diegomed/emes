<template>
  <div>
    <Carousel :pages="pages" />
    <b-container>
      <b-row>
        <h3 class="p-3 text-black-50">Productos destacados</h3>
      </b-row>
      <b-row>
        <!-- <b-col>
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
        <b-col>
          <Product/>
        </b-col> -->
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Pages } from '~/interfaces/interfaces';    

    const App = Vue.extend({
      data() {
        return {
          prueba: 'Hola Mundo',
          pages: [] as Pages[]
        } 
      },
      asyncData({$wp}) {
        console.log($wp, 'wp')
        return $wp.get('pages?parent=17&_embed')
          .then((res: {data: Pages[]}) => {
            return { pages: res.data };
          })
          .catch((err: any) => {
            // console.error(err.response.data);
          });
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
