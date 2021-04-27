import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/mahasiswas/Home.vue'
import Index from '../views/matakuliahs/Index.vue'
import Createmahasiswas from '../views/mahasiswas/Createmahasiswas.vue'
import Editmahasiswas from '../views/mahasiswas/Editmahasiswas.vue'
import Creatematakuliahs from '../views/matakuliahs/Creatematakuliahs.vue'
import Editmatakuliahs from '../views/matakuliahs/Editmatakuliahs.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createmahasiswas',
    name: 'Createmahasiswas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswas
  },
  {
    path: '/editmahasiswas/:id',
    name: 'Editmahasiswas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswas
  },
 {
    path: '/matakuliahs',
    name: 'Index',
    component: Index
  },
  {
    path: '/creatematakuliahs',
    name: 'Creatematakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliahs
  },
  {
    path: '/editmatakuliahs/:id',
    name: 'Editmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliahs
    
 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router