import { useLanguage } from "./use-language"
import { en } from "@/translation/en"
import { ru } from "@/translation/ru"
export const useT = () => {
  const { lang } = useLanguage()
  const t = lang === "en" ? en : ru
  return t
}
