import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/main.css'
import './style/pages.css'

createApp(App).use(router).mount('#app')
