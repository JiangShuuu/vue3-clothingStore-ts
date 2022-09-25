import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/route/index'
import './index.css'
import { Icon } from './plugins/Icon'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { defaultImg } from './plugins/directive'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import VueSocialSharing from 'vue-social-sharing'
import { createHead } from '@vueuse/head'

const app = createApp(App)
app.directive('src', defaultImg)
app.component('Icon', Icon)
app.use(VueSocialSharing)
app.use(createHead())
app.use(VueClipboard)
app.use(router)
app.use(createPinia())
app.use(Toast)
app.mount('#app')
