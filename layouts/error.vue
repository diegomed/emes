<template>
  <div class="container">
    <div v-if="error.statusCode === 500">
      <h1>{{error.message}}</h1>
    </div>
    <h1 v-else>Ups! Algo ocurrió</h1>
    <nuxt-link to="/">Ir a Home</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog' // you can set a custom layout for the error page
  }
</script>