<template>
    <nav class="py-5" aria-label="..." v-if="totalPages > 0">
        <ul class="pagination justify-content-center">
            <li class="page-item" v-bind:class="{disabled: next().currentPage === 1}">
                <nuxt-link class="page-link" :aria-disabled="prev().currentPage === 1" :to="prev().path+'?'+prev().query">Anterior</nuxt-link>
            </li>
            <li class="page-item" v-for="page in createPages(totalPages)" :key="page.number" v-bind:class="{active: isActive(page.currentPage, page.number)}">
                <span v-if="page.currentPage == page.number" class="page-link">
                    {{page.number}}
                    <span class="sr-only">(current)</span>
                </span>
                <nuxt-link v-else class="page-link" :prefetch="false" :to="page.path+'?'+page.query">{{page.number}}</nuxt-link>
                <!-- <a v-else class="page-link"  :href="page.path+'?'+page.query"></a> -->
            </li>
            <li class="page-item" v-bind:class="{disabled: prev().currentPage === totalPages}">
                <nuxt-link class="page-link" :aria-disabled="prev().currentPage === totalPages" :to="next().path+'?'+next().query">Siguiente</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';
    import { Product } from '~/interfaces/interfaces';
    export default Vue.extend ({
        props: {
            totalPages: {
                type: Number,
                required: true
            } as PropOptions<number>,
            path: {
                type: String,
                required: true
            } as PropOptions<string>,
            query: {
                type: Object,
                required: true
            } as PropOptions<string>,
        },
        methods: {
            prev(): string {
                return this.createObjectPage(this.query.page && parseFloat(this.query.page) > 1 ? parseFloat(this.query.page) -1 : 1);
            },
            next(): string {
                return this.createObjectPage(this.query.page && parseFloat(this.query.page) < this.totalPages ? parseFloat(this.query.page) + 1 : this.totalPages);
            },
            isActive(index, current): boolean {
                return parseFloat(index) === parseFloat(current)
            },
            createPages(pages: number): any {
                const pagesObject = [];
                for (let index = 1; index <= this.totalPages; index++) { 
                    pagesObject.push(this.createObjectPage(index)) 
                }
                return pagesObject;
            },
            createObjectPage(index: number, ): any {
                return {
                    number: index,
                    query: Object.keys(this.query).filter(key => key !== 'page').map(key => (
                        key + '=' + this.query[key]
                    )).join('&').concat(Object.keys(this.query).length > 0 ? `&page=${index}`: `page=${index}`),
                    path: this.path,
                    currentPage: this.query.page ? parseFloat(this.query.page) : 1
                }
            }
        }
    })
</script>

<style>

</style>