import { createApp } from 'vue'
import 'animate.css'
import '@fontsource/nerko-one'
import '@fontsource/patrick-hand'
import '@fontsource/lato'
import 'bootstrap'
import App from './App.vue'
import router from './router/'

const app = createApp(App)
app.use(router)
app.mount('#app')



