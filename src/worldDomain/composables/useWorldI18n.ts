import { useI18n } from "vue-i18n"
import ja from "../i18n/ja.json"
import en from "../i18n/en.json"
// import { default as ja } from "../i18n/ja.yaml"
// import { default as en } from "../i18n/en.yaml"

export const useWorldI18n = () => {
  const i18n = useI18n<{ message: typeof ja & typeof en }, "ja" | "en">({
    messages: { ja, en },
    useScope: "local",
  })
  return i18n
}
