import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Map from '../views/Map.vue'
import AdminLogin from '../views/AdminLogin.vue'
import MapDashboard from '../views/MapDashboard.vue'
import SiteAdministration from '../views/SiteAdministration.vue'
import WisataCatalogue from '../views/WisataCatalogue.vue'
import AddWisata from '../views/AddWisata.vue'
import EditWisata from '../views/EditWisata.vue'
import AdminList from '../views/AdminList.vue'
import AddAdmin from '../views/AddAdmin.vue'
import EditAdmin from '../views/EditAdmin.vue'
import Error404 from '../views/Error404.vue'

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
    meta: {
      admin: true,
    }
  },
  {
    path: '/map/dashboard',
    component: MapDashboard,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/',
        component: SiteAdministration,
        name: 'SiteAdministration',
      },
      {
        path: 'catalogue/wisata',
        component: WisataCatalogue,
        name: 'WisataCatalogue'
      },
      {
        path: 'catalogue/wisata/add',
        component: AddWisata,
        name: 'AddWisata',
      },
      {
        path: 'catalogue/wisata/edit/:wisataId',
        component: EditWisata,
        name: 'EditWisata',
      },
      {
        path: 'access/admin',
        component: AdminList,
        name: 'AdminList',
      },
      {
        path: 'access/admin/add',
        component: AddAdmin,
        name: 'AddAdmin',
      },
      {
        path: 'access/admin/edit/:adminId',
        component: EditAdmin,
        name: 'EditAdmin',
      }
    ]
  },
  {
    path: '*',
    component: Error404,
    name: 'Error404'
  },
  {
    path: '/map/dashboard',
    component: Error404,
    name: 'FakeDashboard'
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
        name: 'FakeDashboard'
      })
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.admin)) {
    if (localStorage.getItem('token') == null) {
      next(); 
    } else {
      next('map/dashboard');
    }
  } else {
    next();
  }
})

export default router