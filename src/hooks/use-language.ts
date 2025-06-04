import { useContext } from "react"
import {
  type Language,
  LanguageSetterContext,
  LanguageValueContext,
} from "@/contexts/language/language-context"

export const useLanguage = () => {
  const lang = useContext(LanguageValueContext)
  const setLang = useContext(LanguageSetterContext) as (lang: Language) => void
  return { lang, setLang }
}
