import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Transfers from '../views/Transfers.vue'
import Packages from '../views/Packages.vue'
import Safari from '../views/Safari.vue'
import City from '../views/City.vue'
import Cruise from '../views/Cruise.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'

// ===== 新增：六大中文影子页（保持文件名与你的工程一致）=====
import HomeZh from '../views/Home1.vue'
import TransfersZh from '../views/Transfers1.vue'
import PackagesZh from '../views/Packages1.vue'
import SafariZh from '../views/Safari1.vue'
import CityZh from '../views/City1.vue'
import CruiseZh from '../views/Cruise1.vue'

const routes = [
  // ===== 原有英文主页面（不改）=====
  { path: '/', name: 'Home', component: Home },
  { path: '/transfers', name: 'Transfers', component: Transfers },
  { path: '/packages', name: 'Packages', component: Packages },
  { path: '/safari', name: 'Safari', component: Safari },
  { path: '/city', name: 'City', component: City },
  { path: '/cruise', name: 'Cruise', component: Cruise },

  // ===== 新增：中文影子主页面（/cn 前缀）=====
  { path: '/cn', name: 'HomeZh', component: HomeZh },
  { path: '/cn/transfers', name: 'TransfersZh', component: TransfersZh },
  { path: '/cn/packages', name: 'PackagesZh', component: PackagesZh },
  { path: '/cn/safari', name: 'SafariZh', component: SafariZh },
  { path: '/cn/city', name: 'CityZh', component: CityZh },
  { path: '/cn/cruise', name: 'CruiseZh', component: CruiseZh },

  // ===== 其余原有页面与次级页面（不改）=====
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/transfers/short', name: 'TransferShort', component: () => import('@/views/transfers/short.vue') },
  { path: '/transfers/long', name: 'TransferLong', component: () => import('@/views/transfers/long.vue') },
  { path: '/safari/regsafari', name: 'SafariReg', component: () => import('@/views/safari/regsafari.vue') },
  { path: '/safari/upsafari', name: 'SafariUp', component: () => import('@/views/safari/upsafari.vue') },
  { path: '/safari/addon', name: 'Addon', component: () => import('@/views/safari/addon.vue') },
  { path: '/package/34nights', name: '34Nights', component: () => import('@/views/package/34nights.vue') },
  { path: '/package/56nights', name: '56Nights', component: () => import('@/views/package/56nights.vue') },
  { path: '/city/city12', name: 'City12', component: () => import('@/views/city/city12.vue') },
  { path: '/city/city34', name: 'City34', component: () => import('@/views/city/city34.vue') },
  { path: '/city/sndcruise', name: 'Sndcruise', component: () => import('@/views/city/sndcruise.vue') },
  { path: '/city/sndcruise1', name: 'Sndcruise1', component: () => import('@/views/city/sndcruise1.vue') },
  { path: '/city/city121', name: 'City121', component: () => import('@/views/city/city121.vue') },
  { path: '/city/city341', name: 'City341', component: () => import('@/views/city/city341.vue') },
  { path: '/transfers/short1', name: 'TransferShort1', component: () => import('@/views/transfers/short1.vue') },
  { path: '/transfers/long1', name: 'TransferLong1', component: () => import('@/views/transfers/long1.vue') },
    { path: '/safari/addon1', name: 'Addon1', component: () => import('@/views/safari/addon1.vue') },
    { path: '/safari/regsafari1', name: 'SafariReg1', component: () => import('@/views/safari/regsafari1.vue') },
  { path: '/safari/upsafari1', name: 'SafariUp1', component: () => import('@/views/safari/upsafari1.vue') },
  { path: '/package/34nights1', name: '34Nights1', component: () => import('@/views/package/34nights1.vue') },
  { path: '/package/56nights1', name: '56Nights1', component: () => import('@/views/package/56nights1.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

export default router
