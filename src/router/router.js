import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: "/custom-directive",
      component: ()=>import('../views/customDirective.vue')
    },
    {
      path: "/vuex-parent",
      component: ()=>import('../views/vuex/parent.vue')
    },
    {
      path: "/vuex-child",
      component: ()=>import('../views/vuex/child.vue')
    },
  ]
});
