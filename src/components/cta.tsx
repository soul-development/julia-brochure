import { useT } from "@/hooks/use-t"

export const Cta = () => {
  const t = useT()
  return (
    <div className="mt-20">
      <div className="flex gap-10 justify-center items-center flex-wrap">
        <div className="shadow-lg p-10 rounded-lg flex flex-col gap-5 items-center bg-white">
          <h4 className="text-xl text-blue-950 font-medium">
            {t.cta.dental.title}
          </h4>
          <CtaButton href="https://go.juliabarinova.com/smile">
            {t.cta.dental.button}
          </CtaButton>
        </div>
        <div className="shadow-lg p-10 rounded-lg w-[600px] flex flex-col gap-5 items-center bg-white">
          <h4 className="text-xl text-blue-950">{t.cta.other.title}</h4>
          <CtaButton href="https://calendly.com/jbarinova">
            {t.cta.other.button}
          </CtaButton>
        </div>
      </div>
    </div>
  )
}

const CtaButton = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-950 hover:bg-blue-900 transition-colors uppercase duration-500 text-white px-4 py-2 rounded-md outline-none no-underline">
      {children}
    </a>
  )
}
