import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/route/index'
import './index.css'
import { Icon } from './plugins/Icon'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import Loading from '~/components/global/Loading.vue'
import ImageLoad from '~/components/global/ImageLoad.vue'

const app = createApp(App)
app.component('Icon', Icon)
app.component('Loading', Loading)
app.component('ImageLoad', ImageLoad)
app.use(router)
app.use(createPinia())
app.use(Toast)
app.mount('#app')
