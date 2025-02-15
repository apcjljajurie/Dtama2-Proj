import { createApp } from 'vue'
import App from './App.vue'
import BuyerTab from './component/BuyerTab.vue'


const app = createApp(App)
app.component('buyer-tab', BuyerTab)
app.mount('#app')