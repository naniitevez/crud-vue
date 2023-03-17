import { createStore } from "vuex";
import state from "./state";
// import actions from "./actions";

const store = createStore({
  state,
  getters: {},
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        // console.log(users, "user");
        commit("setUsers", users);
      } catch (error) {
        console.log(error);
      }
    },
    saveUpdatedUser({ commit }, user) {
      commit("updateUser", user);
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    updateUser(state, updatedUser) {
      const index = state.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
  },
});
export default store;
