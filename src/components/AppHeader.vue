<template>
  <nav>
    <div class="back-button-container">
      <button class="btn btn-light" v-if="!isHome" @click="goBack">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />Volver
      </button>
    </div>
    <div class="menu-container">
      <router-link to="/">Inicio</router-link>
      <router-link to="/user/create">Nuevo usuario</router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isHome = computed(() => route.path === "/");

const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
nav {
  padding: 30px;
  margin-bottom: 3rem;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.15);

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .back-button-container {
    button {
      svg {
        margin-right: 10px;
      }
    }
  }
}
</style>