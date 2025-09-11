import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Transfers from '../views/Transfers.vue'
import Packages from '../views/Packages.vue'
import Safari from '../views/Safari.vue'
import City from '../views/City.vue'
import Cruise from '../views/Cruise.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/transfers', name: 'Transfers', component: Transfers },
  { path: '/packages', name: 'Packages', component: Packages },
  { path: '/safari', name: 'Safari', component: Safari },
  { path: '/city', name: 'City', component: City },
  { path: '/cruise', name: 'Cruise', component: Cruise },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/admin', name: 'Admin', component: Admin },
  {path: '/transfers/short',name: 'TransferShort',component: () => import('@/views/transfers/short.vue')},
  {path: '/transfers/long',name: 'TransferLong',component: () => import('@/views/transfers/long.vue')},
  {path: '/safari/regsafari',name: 'SafariReg',component: () => import('@/views/safari/regsafari.vue')},
  {path: '/safari/upsafari',name: 'SafariUp',component: () => import('@/views/safari/upsafari.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
  
    }else{
      return { left: 0, top: 0 }
    }
  }
})

export default router

