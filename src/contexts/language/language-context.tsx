import { createContext } from "react"

export type Language = "en" | "ru"

export const LanguageValueContext = createContext<Language>("en")
export const LanguageSetterContext = createContext<
  undefined | ((lang: Language) => void)
>(undefined)