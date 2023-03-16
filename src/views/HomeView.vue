<template>
  <div class="container">
    <div class="row">
      <CardComponent
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :email="user.email"
        :phone="user.phone"
      />
    </div>
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