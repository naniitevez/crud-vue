<template>
  <h2>detalle {{ userId }}</h2>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => {
  store.state.users
});

const route = useRoute();
const userId = computed(() => route.params.id);
</script>

<style>
</style>