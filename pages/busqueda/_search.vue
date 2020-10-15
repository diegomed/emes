<template>
  <div>
    <div class="bg-primary py-3">
      <h3 class="p-3 text-white text-center font-weight-normal">Búsqueda: <b>{{searchKey}}</b></h3>
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
            <b-col v-for="item in products" :key="item.id" cols="6" md="4" lg="3" >
              <Product :product="item"/>
            </b-col>
            <b-col  v-if="!products.length">
              <h4 class="text-secondary text-center p-4">No se encontraron productos relacionadas para: {{searchKey}}</h4>
            </b-col>
          </b-row>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Category, Product } from '~/interfaces/interfaces';


  const Categories = Vue.extend({
    head(): {title: string; meta: any[];} {
      return {
        title: this.searchKey,
        meta: [
          { hid: 'description', id: 'description', name: 'description', content: this.searchKey }
        ]
      }
    },
    asyncData({params, $api}) {
        return $api.get(`products?search=${params.search}`).then(
          (productList: any) => {
            return {
                searchKey: params.search,
                products: productList.data
            }
          }
        )
    },
    data() {
      return {
        searchKey: '' as string,
        products: [] as Product[]
      } 
    },
    methods: {
      init(): void {
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
