// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useWonderCart } from '@/stores/wonderCart'   

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)


useWonderCart(pinia).hydrate()

app.mount('#app')
