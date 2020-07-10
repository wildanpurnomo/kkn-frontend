import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Map from '../views/Map.vue'
import AdminLogin from '../views/AdminLogin.vue'
import MapDashboard from '../views/MapDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/map/admin',
    name: 'AdminLogin',
    component: AdminLogin,
  },
  {
    path: '/map/dashboard',
    name: 'MapDashboard',
    component: MapDashboard,
    meta: {
      requiresAuth: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/admin',
        params: { nextUrl: to.fullPath },
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router