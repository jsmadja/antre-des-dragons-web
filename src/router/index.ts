import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Book from "../views/Book.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Book",
    component: Book
  },
  {
    path: "/:pipId/chapter/:chapterNumber",
    name: "Chapter",
    component: Book
  },
  {
    path: "/:pipId/chapter/:chapterNumber/questions/:questionId/:answer",
    name: "Answer",
    component: Book
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
