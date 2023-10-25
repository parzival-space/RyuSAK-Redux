import { createApp } from "vue";
import App from "./App.vue";

// Roboto Font
import '@fontsource/roboto';

// Font Awesome 5
import '@fortawesome/fontawesome-free/css/all.css' // must be loaded beforce vuetify for now
import { aliases, fa } from 'vuetify/iconsets/fa'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Setup Vuetify
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

createApp(App)
    .use(vuetify)
    .mount("#app");