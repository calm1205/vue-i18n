import { createApp } from "vue"
import { createI18n } from "vue-i18n"

import "./style.css"
import App from "./App.vue"

const locale = import.meta.env.MODE === "en" ? "en" : "ja"
const i18n = createI18n({
  locale,
  legacy: false,
  fallbackLocale: "ja",
  messages: {
    ja: {
      hello: "こんにちは",
    },
    en: {
      hello: "Hello",
    },
  },
})

createApp(App).use(i18n).mount("#app")

// 後から代入でlocaleを変更
// i18n.global.locale.value = "ja"
