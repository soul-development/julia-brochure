import { useLanguage } from "@/hooks/use-language"
import logo from "/logo.png"
import { cn } from "@/lib/utils"
export const Header = () => {
  return (
    <header>
      <div className="flex justify-center relative">
        <img src={logo} alt="Logo" className="w-60" />
        <LanguageSwitcher />
      </div>
    </header>
  )
}

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex gap-2 absolute right-10 top-1/2 -translate-y-1/2">
      <div
        className={cn(
          "cursor-pointer select-none",
          lang === "en" ? "font-medium" : "text-zinc-600"
        )}
        onClick={() => setLang("en")}>
        EN
      </div>
      <div
        className={cn(
          "cursor-pointer select-none",
          lang === "ru" ? "font-medium" : "text-zinc-600"
        )}
        onClick={() => setLang("ru")}>
        RU
      </div>
    </div>
  )
}
