// Roboto Font
import '@fontsource/roboto';

// Setup Vuetify & Font Awesome 5
import '@fortawesome/fontawesome-free/css/all.css' // must be loaded beforce vuetify for now
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa,
        },
    },
    theme: {
        defaultTheme: 'dark'
    }
})

// Setup Vue Router
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import GameView from "./views/GameView.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeView },
        { path: '/game/:id', component: GameView }
    ]
})

// Create App
import { createApp } from "vue";
import App from "./App.vue";
createApp(App)
    .use(router)
    .use(vuetify)
    .mount("#app");