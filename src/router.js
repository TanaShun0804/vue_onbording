import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Books from "./views/Books";
import Book from "./views/Book";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/books",
      name: "books",
      component: Books,
    },
    {
      path: "/book",
      name: "book",
      component: Book,
    },
  ],
});
