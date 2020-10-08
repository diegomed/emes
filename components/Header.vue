<template>
    <div>
        <div class="w-100 p-2 bg-dark">
            <div class="container d-flex justify-content-between min-font text-white">
                <span class="">Tlf: 4723 4508 - 098 257 562</span>
                <span class="ml-3">Paysandú - Uruguay</span>
            </div>
        </div>
        <b-navbar toggleable="lg" class="border-bottom">
            <div class="container">
                <b-navbar-brand href="#">
                    <img src="~/assets/images/logo.png" />
                </b-navbar-brand>
                <b-navbar-nav>
                    <div class="input-group">
                        <input type="text" class="form-control bg-light" placeholder="Encontrá tu producto" aria-label="Encontrá tu producto" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="button">Buscar</button>
                        </div>
                    </div>
                </b-navbar-nav>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item v-b-toggle="'collapse-2'" class="min-font">Categorías</b-nav-item>
                        <b-nav-item class="min-font" href="#">Conócenos</b-nav-item>
                        <b-nav-item class="min-font" href="#">Contacto</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
        <Categories/>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .min-font {
        font-size: .9rem;
    }
</style>