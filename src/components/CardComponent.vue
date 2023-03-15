<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ props.name }}</h5>
      <p class="card-text">{{ props.email }}</p>
      <p class="card-text">Cel. {{ props.phone }}</p>
      <hr />
      <p>{{ props.address.street }}, {{ props.address.suite }} - {{ props.address.city }}</p>
      <span>CP. {{ props.address.zipcode }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
  },
  phone: String,
});
</script>

<style>
</style>