<template>
    <ul>
        <li v-for="category in filterCategories(categories)" :key="category.id">
            <n-link :to="`${parent}/${category.slug}`" no-prefetch>{{category.name}}</n-link>
            <!-- <a ></a> -->
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';
    import { Category } from '~/interfaces/interfaces';
    // import api from '~/core/api';

    export default Vue.extend({
        props: {
            parent: {
                type: String,
                required: false
            } as PropOptions<string>,
            categories: {
                type: Array,
                required: true
            } as PropOptions<Category[]>
        },
        methods: {
            filterCategories($categories: Category[]): Category[] {
                return $categories.filter( m => m.slug !== 'uncategorized');
            }
        }
    });
</script>

<style>

</style>