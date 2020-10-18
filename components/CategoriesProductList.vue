<template>
    <ul>
        <li v-for="category in filterCategories(categories)" :key="category.id">
            <a :href="`/categoria/${category.slug}`">{{category.name}}</a>
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';
    import { Category } from '~/interfaces/interfaces';
    // import api from '~/core/api';

    export default Vue.extend({
        props: {
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