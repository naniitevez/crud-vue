<template>
  <div class="newUser-page">
    <div class="container">
      <div class="title-container">
        <h2>Crear nuevo usuario</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

console.log(store.state.users);
</script>

<style>
</style>