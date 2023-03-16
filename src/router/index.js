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
    path: "/user/new",
    name: "newUser",
    component: () =>
      import(/* webpackChunkName: "newUser" */ "../views/NewUserView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
