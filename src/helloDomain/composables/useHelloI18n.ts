import { useI18n } from "vue-i18n"
import ja from "../i18n/ja.json"
import en from "../i18n/en.json"

type MessageSchema = typeof ja & typeof en
export const useHelloI18n = () => {
  const i18n = useI18n<{ message: MessageSchema }, "ja" | "en">({
    messages: { ja, en },
    useScope: "local",
  })
  return i18n
}
