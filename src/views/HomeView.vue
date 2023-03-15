<template>
  <div class="container">
    <div class="row">
      <CardComponent v-for="user in users" :key="user.id" 
      :name="user.name"
      :email="user.email"
      :address="user.address"
      :phone="user.phone" />
    </div>
  </div>
</template>

<script setup>
import CardComponent from "@/components/CardComponent.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const users = ref([]);

onMounted(() => {
  store.dispatch("fetchUsers").then(() => {
    users.value = store.state.users;
  });
});
</script>

<style>
</style>