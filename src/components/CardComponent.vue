<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <div class="name-container">
        <div class="icon-container">
          <font-awesome-icon icon="fa-solid fa-user" />
        </div>
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
    <div class="card-footer">
      <router-link :to="'/detail/' + props.id">
        <button class="btn btn-info">Detalle</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: Number,
  name: String,
  email: String,
  phone: String,
});
</script>

<style lang="scss" scoped>
.card {
  margin: 1rem;
  box-shadow: -8px 5px 12px -3px rgba(0, 0, 0, 0.29);
}

.name-container {
  margin-bottom: 1rem;
  border-bottom: 1px solid black;

  .icon-container {
    width: 2rem;
    height: 2rem;
    margin: auto;
    box-shadow: -3px 5px 12px -3px rgba(0, 0, 0, 0.29);
    border-radius: 50%;
    padding: 2px;
    margin-bottom: 0.5rem;
  }
}

.info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.6rem;
  }
}
</style>