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
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
});
export default store;
