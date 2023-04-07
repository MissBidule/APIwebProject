import { createApp } from 'vue'
import { router } from './services/router.js'
//global var
//myApp.config.globalProperties.$myVar = globalVariable 
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
