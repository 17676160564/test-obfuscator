import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


// 整个应用支持路由
createApp(App).use(router).mount('#app')