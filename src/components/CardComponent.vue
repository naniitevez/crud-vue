<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ props.name }}</h5>
      <p class="card-text">{{ props.email }}</p>
      <p class="card-text">Cel. {{ props.phone }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  email: String,
  phone: String,
});
</script>

<style scoped>
.card {
    margin: 1rem;
}
</style>