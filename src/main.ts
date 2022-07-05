import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/route/index'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../src/plugins/fontawsome'
import { Icon } from './plugins/Icon'

const app = createApp(App)
app.component('Icon', Icon)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
