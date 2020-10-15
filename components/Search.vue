<template>
    <div class="input-group">
        <input type="text" v-model="search" class="form-control bg-light" placeholder="Encontrá tu producto" aria-label="Encontrá tu producto" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button class="btn btn-secondary" @click="redirectToSearch" type="button">Buscar</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToSearch() {
            if(this.search.trim() !== '') {
                window.location.replace(`/busqueda/${this.search}`);
            }
        }
    },
    data() {
        return {
            search: ''
        }
    }
}
</script>

<style>

</style>