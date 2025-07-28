import { createApp } from "vue"
import { createI18n } from "vue-i18n"

import ja from "./common/i18n/ja.json"
import en from "./common/i18n/en.json"
import App from "./App.vue"

const locale = import.meta.env.MODE === "en" ? "en" : "ja"
const i18n = createI18n<[typeof ja, typeof en], "ja" | "en">({
  locale,
  legacy: false,
  messages: {
    ja,
    en,
  },
})

createApp(App).use(i18n).mount("#app")
