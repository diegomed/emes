<template>
  <div class="w-100">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
            <ul>
              <li>
                <a href="/">Emes</a>
              </li>
              <li v-for="category in product.categories" :key="category.id">
                <a :href="`/categoria/${category.slug}`">{{category.name}}</a>
              </li>
            </ul>
            <div v-if="product.images.length">
              <img :alt="product.images[0].alt" :title="product.images[0].name" :src="product.images[0].src" />
            </div>
        </div> 
        <div class="col-12 col-md-6">
            <h1 class="p-2">{{product.name}}</h1>
            <div class="p-2">$<span class="font-weight-bold">{{product.price}}</span></div>
            <section class="p-2" v-html="product.description"></section>
        </div> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';  
    const ProductView = Vue.extend({
      head() {
        return {
          title: this.product.name,
          meta: [
            // { hid: 'description', id: 'description', name: 'description', content: this.product.description }
          ]
        }
      },
      asyncData({params, $api}) {
          return $api.get(`products?slug=${params.slug}`)
          .then((response: any) => {
            console.log(response.data[0])
            return { product: response.data[0] }
              // return res.status(200).json(response.data);
          })
          .catch((error: any) => {
              console.log(error.response.data);
              // return res.status(400).json(error.response.data);
          });
      },
      data() {
        return {
          product: {} as Product 
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

    export default ProductView;
</script>

<style>

</style>
