import eslintPluginVue from "eslint-plugin-vue"
import vueI18n from "@intlify/eslint-plugin-vue-i18n"

export default [
  ...eslintPluginVue.configs["flat/recommended"],
  ...vueI18n.configs.recommended,
  {
    rules: {
      "@intlify/vue-i18n/no-unused-keys": ["error"],
      "@intlify/vue-i18n/no-missing-keys": ["error"],
    },
    settings: {
      "vue-i18n": {
        localeDir: "src/**/i18n/*.json",
        messageSyntaxVersion: "^11.0.0",
      },
    },
  },
]
