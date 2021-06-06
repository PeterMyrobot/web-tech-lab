import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/LandingPage.vue'),
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/canvas',
    name: 'Canvas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vueCanvas.vue'),
  },
  {
    path: '/graph',
    name: 'Graph',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Graph.vue'),
  },
  {
    path: '/vision',
    name: 'Vision',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vision.vue'),
  },
  // {
  //   path: '/audio',
  //   name: 'Audio',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AudioGenerator.vue'),
  // },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue'),
  // },

];

const router = new VueRouter({
  routes,
});

export default router;
