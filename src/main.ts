import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/route/index'
import './index.css'
import { Icon } from './plugins/Icon'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
app.component('Icon', Icon)
app.use(router)
app.use(createPinia())
app.use(Toast)
app.mount('#app')
