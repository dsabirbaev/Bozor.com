import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import { createI18n, useI18n } from 'vue-i18n'
import { languages, defaultLocale } from "./locale"

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons


const messages = Object.assign(languages);
const localLang = localStorage.getItem('lang');

const i18n = createI18n({
    legacy: false,
    locale: localLang || defaultLocale,
    fallbackLocale: "uz",
    messages
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(PrimeVue);
app.use(router)
app.mount('#app')
