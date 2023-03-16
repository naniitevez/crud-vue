<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <div class="name-container">
        <font-awesome-icon icon="fa-solid fa-user" />
        <h5 class="card-title">{{ props.name }}</h5>
      </div>
      <div class="info-container">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <p class="card-text">{{ props.email }}</p>
      </div>
      <div class="info-container">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <p class="card-text">{{ props.phone }}</p>
      </div>
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

<style lang="scss" scoped>
.card {
  margin: 1rem;
}

.name-container {
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
}

.info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: .5rem;

  svg {
    margin-right: 0.6rem;
  }
}
</style>