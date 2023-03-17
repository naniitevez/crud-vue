<template>
  <div class="edit-page">
    <div class="container edit-container">
      <div class="title-container">
        <h2>Editar usuario</h2>
        <hr />
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3 input-container">
          <label for="name" class="form-label">Nombre: </label>
          <input
            v-model="user.name"
            type="text"
            class="form-control"
            id="name"
            placeholder="Ingresa un nombre de usuario"
          />
        </div>
        <div class="mb-3 input-container">
          <label for="email" class="form-label">Email: </label>
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            id="email"
            placeholder="Ingresa un email"
          />
        </div>
        <div class="mb-3 input-container">
          <label for="phone" class="form-label">Teléfono: </label>
          <input
            v-model="user.phone"
            type="text"
            class="form-control"
            id="phone"
            placeholder="Ingresa un número de contacto"
          />
        </div>
        <div class="row g-2 double-input-container">
          <div class="col-auto input-container">
            <label for="street" class="form-label">Calle: </label>
            <input
              v-model="user.address.street"
              type="text"
              class="form-control"
              id="street"
              placeholder="Ingresa una calle"
            />
          </div>
          <div class="col-auto input-container">
            <label for="suite" class="form-label">Depto.: </label>
            <input
              v-model="user.address.suite"
              type="text"
              class="form-control"
              id="suite"
              placeholder="Ingresa el departamento"
            />
          </div>
        </div>
        <div class="row g-2 double-input-container">
          <div class="col-auto input-container">
            <label for="city" class="form-label">Ciudad: </label>
            <input
              v-model="user.address.city"
              type="text"
              class="form-control"
              id="city"
              placeholder="Ingresa la ciudad"
            />
          </div>
          <div class="col-auto input-container">
            <label for="zipcode" class="form-label">Código postal: </label>
            <input
              v-model="user.address.zipcode"
              type="text"
              class="form-control"
              id="zipcode"
              placeholder="Ingresa el código postal"
            />
          </div>
        </div>
        <div class="d-grid gap-2 button-container">
          <button type="submit" class="btn btn-primary">Guardar</button>
          <button type="submit" class="btn btn-secondary">Cancelar</button>
        </div>
      </form>
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

const handleSubmit = () => {
  store.dispatch('saveUpdatedUser', user.value)
};
</script>

<style lang="scss" scoped>
.edit-page {
  padding-bottom: 5rem;
  .edit-container {
    width: 35rem;
    padding: 3rem;
    box-shadow: -0px 0px 15px -3px rgba(0, 0, 0, 0.29);
    border-radius: 10px;

    .title-container {
      margin-bottom: 3rem;
    }

    form {
      .input-container {
        display: flex;
        flex-direction: column;
        align-items: start;

        label {
          margin: 0.5rem 0 1rem;
        }
      }

      .double-input-container {
        justify-content: space-between;
      }

      .button-container {
        margin-top: 2rem;
      }
    }
  }
}
</style>