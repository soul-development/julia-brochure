import { useState } from "react"
import {
  type Language,
  LanguageSetterContext,
  LanguageValueContext,
} from "./language-context"

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [language, setLanguage] = useState<Language>("en")
  return (
    <LanguageValueContext.Provider value={language}>
      <LanguageSetterContext.Provider value={setLanguage}>
        {children}
      </LanguageSetterContext.Provider>
    </LanguageValueContext.Provider>
  )
}
