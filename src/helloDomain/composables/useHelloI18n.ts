import { useI18n } from "vue-i18n"
import ja from "../i18n/ja.json"
import en from "../i18n/en.json"

export const useHelloI18n = () => {
  const i18n = useI18n<{ message: typeof ja & typeof en }, "ja" | "en">({
    messages: { ja, en },
    useScope: "local",
  })
  return i18n
}
