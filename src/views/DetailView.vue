<template>
  <div class="detail-page">
    <div class="container detail-container">
      <div class="name-container">
        <font-awesome-icon icon="fa-solid fa-user" />
        <h2>{{ user.name }}</h2>
      </div>
      <p><span>Email: </span>{{ user.email }}</p>
      <p><span>Phone: </span>{{ user.phone }}</p>
      <hr />
      <div class="address-container">
        <h3>Dirección:</h3>
        <p>
          {{ user.address.street }}, {{ user.address.suite }} -
          {{ user.address.city }}
        </p>
        <p><span>CP. </span>{{ user.address.zipcode }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

const route = useRoute();
const userId = computed(() => route.params.id);

const store = useStore();

const user = computed(() => {
  return store.state.users.filter(
    (user) => user.id === Number(userId.value)
  )[0];
});
</script>

<style lang="scss" scoped>
.detail-page {
  margin-top: 2rem;

  .detail-container {
    padding: 2rem;
    box-shadow: -0px 0px 15px -3px rgba(0, 0, 0, 0.29);
    border-radius: 10px;

    .name-container {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 23px;
        margin-right: 1rem;
        margin-bottom: 0.5rem;
      }
    }

    .address-container {
      h3 {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>