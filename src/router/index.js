import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Trends from "../views/Trends.vue";

var router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "about page",
      component: About,
    },
    {
      path: "/trends",
      name: "trends page",
      component: Trends,
    },
    {
      path: "/contact",
      name: "contact page",
      component: Contact,
    },
  ],
});

export default router;
