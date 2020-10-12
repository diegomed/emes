<template>
  <div>
    <div class="bg-primary py-3">
      <h3 class="p-3 text-white text-center font-weight-normal">Categoría: <b>{{category.name}}</b></h3>
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
          </b-row>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  interface Category {
    id: number;
    name: string;
    slug: string;
  }
  const Categories = Vue.extend({
    asyncData({params, $api}) {
      return $api.get(
        `products/categories?slug=${params.name}`
      ).then( (categoryData: {data: Category[]}) => {
        console.log(categoryData.data)
        return $api.get(`products?category=${categoryData.data[0].id}`).then(
          (productList: any) => {
            return {
              category: categoryData.data[0],
              products: productList.data
            }
          }
        )
      })
    },
      data() {
        return {
          category: {}  as Category,
          products: []
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
