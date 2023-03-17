<template>
  <div class="container">
    <div v-if="users.length !== 0" class="row">
      <CardComponent
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :email="user.email"
        :phone="user.phone"
      />
    </div>
    <h2 v-else>No hay usuarios</h2>
  </div>
</template>

<script setup>
import CardComponent from "@/components/CardComponent.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const users = computed(() => store.state.users);

onMounted(() => {
  store.dispatch("fetchUsers");
});
</script>

<style scoped>
</style>