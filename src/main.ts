import { createApp } from 'vue'
import App from '@/vue/App.vue'
import '@/scss/app.scss'

import { router } from '@/router'
import { createPinia } from 'pinia'

const app = createApp(App)
const store = createPinia()

app.use(store).use(router)
app.mount('#app')
