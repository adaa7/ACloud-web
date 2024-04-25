import './assets/base.css'

import { createApp } from 'vue'
import pinia from '@/stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import gloalComponent from '@/components';
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.use(gloalComponent)

app.mount('#app')
