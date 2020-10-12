<template>
    <div>
        <b-card
            img-src="https://geant.vteximg.com.br/arquivos/ids/194726-1000-1000/604891.jpg?v=636312984927700000"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
                <div class="product__category text-uppercase text-black-50">{{product.categories[0].name}}</div>
                <h5>
                    <a :href="`/producto/${product.slug}`">{{product.name}}</a>
                </h5>
            </b-card-text>

            <div class="d-flex justify-content-between">
                <div >$<span class="font-weight-bold">{{product.price}}</span></div>
                <a :href="`/producto/${product.slug}`" class="d-flex align-items-center bg-primary rounded-circle no-color button-layout justify-content-center text-decoration-none"><span class="text-white" style="margin-top: -5px">+</span></a>
            </div>
        </b-card>
    </div>

</template>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';
    export interface Product {
            name: string; 
            description: string;
            price: string;
            slug: string;
            images: {
              name: string;
              src: string;
            }[];
            categories: any[];
          }
    export default Vue.extend ({
        
        props: {
            product: {
                type: Object,
                required: true
            } as PropOptions<Product>
        },
    })
</script>

<style>
    .no-color:hover {
        color: white;
    }

    .product__category {
        font-size: .75rem;
    }

    .button-layout {
        width: 30px;
        height: 30px;
        font-size: 20px;
    }
</style>