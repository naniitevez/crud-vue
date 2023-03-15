<template>
  <h1>HOME</h1>
  <template v-for="user in users" :key="user.id">
    <div>{{ user.name }}</div>
  </template>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const users = ref([])

onMounted(() => {
  store.dispatch('fetchUsers').then(() => {
    users.value = store.state.users
  })
});

</script>

<style>
</style>