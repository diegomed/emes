<template>
  <b-dropdown id="dropdown-1" text="Categorías" class="m-md-2">
    <b-dropdown-item v-for=" category in categories" :key="category.id" :href="`/categoria/${category.slug}`">{{category.name}}</b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Category } from '~/interfaces/interfaces';
    import api from '~/core/api';

    export default Vue.extend({
        created(){
            api.get("products/categories")
            .then((response: any) => {
                this.categories = response.data;
                // return res.status(200).json(response.data);
            })
            .catch((error: any) => {
                // console.log('qq')
                console.log(error.response.data);
                // return res.status(400).json(error.response.data);
            });
        },
        data() {
            return {
                categories: [] as Category[]
            }
        }
    })
</script>

<style>

</style>