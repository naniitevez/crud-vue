import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user/detail/:id",
    name: "userDetail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/UserDetailView.vue"),
  },
  {
    path: "/user/update/:id",
    name: "updateUser",
    component: () =>
      import(/* webpackChunkName: "updateUser" */ "../views/UpdateUserView.vue"),
  },
  {
    path: "/user/create",
    name: "createUser",
    component: () =>
      import(/* webpackChunkName: "createUser" */ "../views/CreateUserView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
