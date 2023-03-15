<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/detail">Detalle</router-link>
  </nav>
</template>

<script setup>
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>