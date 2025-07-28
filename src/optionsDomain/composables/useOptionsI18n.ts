import { useI18n } from "vue-i18n"
import ja from "../i18n/ja.json"
import en from "../i18n/en.json"

export const useOptionsI18n = () => {
  const i18n = useI18n<{ message: typeof ja & typeof en }, "ja" | "en">({
    messages: { ja, en },
    useScope: "global",
  })
  return i18n
}
