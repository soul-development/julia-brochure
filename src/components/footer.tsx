import { useT } from "@/hooks/use-t"

export const Footer = () => {
  const t = useT()
  return (
    <div className="mt-40">
      <div className="flex flex-col items-start gap-5">
        <h2 className="text-xl text-zinc-800">{t.contacts.title}</h2>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-5">
            <div>Julia Barinova Inc</div>
            <div>1501 Voorhies Ave, Brooklyn, NY 11235 USA</div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              Tel:&nbsp;
              <a href="tel:+13479228037" className="text-blue-800 underline">
                347-922-80-37
              </a>
            </div>
            <div>
              Email:&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:julia@juliabarinova.com"
                className="text-blue-800">
                julia@juliabarinova.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
