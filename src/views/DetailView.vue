<template>
  <h2>detalle {{ userId }}</h2>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const userId = computed(() => route.params.id);
</script>

<style>
</style>