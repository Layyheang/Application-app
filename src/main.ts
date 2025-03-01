import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import PrimeVue from 'primevue/config';
import VueCryptojs from 'vue-cryptojs'
import Aura from '@primevue/themes/aura';
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options : {
          darkModeSelector: ''
        } 
    }
});
app.use(VueCryptojs)
app.mount('#app')
