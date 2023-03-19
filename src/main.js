import { createApp } from "vue"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import VueDOMPurifyHTML from "vue-dompurify-html"
import App from "./App.vue"
import router from "./router"
import "./assets/global.css"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(router).use(pinia).use(VueDOMPurifyHTML).mount("#app")
