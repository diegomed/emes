<template>
  <div>
    <div class="bg-primary py-3">
      <h3 class="p-3 text-white text-center font-weight-normal">Categoría: <b>{{category.name}}</b></h3>
    </div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="4" lg="3">
          <div>
            <h5>Categorías</h5>
            <CategoriesProductList :categories="categoryList"/>
          </div>
        </b-col>
        <b-col cols="12" md="8" lg="9">
          <b-row>
            <b-col v-for="item in products" :key="item.id" cols="6" md="4" lg="3" >
              <Product :product="item"/>
            </b-col>
            <b-col  v-if="!products.length">
              <h4 class="text-secondary text-center p-4">No se encontraron productos en la categoría {{category.name}}</h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <Pagination :totalPages="totalPages" :path="path" :query="query" />
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
        title: this.category.name,
        meta: [
          { hid: 'description', id: 'description', name: 'description', content: this.category.description }
        ]
      }
    },
    async asyncData({params, $api, query, route}) {
      const categoryData: {data: Category[]} = await $api.get(`products/categories?slug=${params.name}`);
      const productList: {headers: any, data: Product[]} = await $api.get(`products?category=${categoryData.data[0].id}&page=${query.page ? query.page : 1}&per_page=1`);
      const categoryList: {data: Category[]} = await $api.get(`products/categories`);
      // console.log(productList.headers)
      return {
              category: categoryData.data[0],
              products: productList.data,
              categoryList: categoryList.data,
              totalPages: parseFloat(productList.headers['x-wp-totalpages']),
              query,
              path: route.path
            }
    },
    data() {
      return {
        category: {}  as Category,
        products: [],
        categoryList: [] as Category[],
        totalPages: 0 as number,
        query: {},
        params: {}
      } 
    },
    methods: {
      init(): void {
      },
      // isActive(index, current): boolean {
      //   console.log(index, current)
      //   return parseFloat(index) === parseFloat(current)
      // },
      // createPages(pages: number): any {
      //   const pagesObject = [];
      //   for (let index = 1; index <= 10; index++) { 
      //     pagesObject.push({
      //       number: index,
      //       query: Object.keys(this.query).map(key => {
      //         if(key === 'page') {
      //           return `page=${index}`
      //         } else {
      //           return key + '=' + this.query[key]
      //         }
              
      //       }).join('&'),
      //       path: this.path,
      //       currentPage: this.query.page ? this.query.page : 1
      //     }) 
      //   }
      //   return pagesObject;
      // }
    },
    created() {
      this.init();
    }
  })

  export default Categories;
</script>

<style>

</style>
