import { useT } from "@/hooks/use-t"
import main from "/main_c.jpg"

export const Greeting = () => {
  const t = useT()
  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img src={main} alt="" className="aspect-[1.5/1]" />
        </div>
        <div className="flex flex-col gap-5 text-justify">
          {t.greeting[1].map((text, index) => (
            <div key={index}>{text}</div>
          ))}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10 text-justify">
        <div className="flex flex-col gap-5">
          {t.greeting[2].map((text, index) => (
            <div key={index}>{text}</div>
          ))}
        </div>
        <div className="flex flex-col gap-5 grow">
          {t.greeting[3].map((text, index) => (
            <div key={index}>{text}</div>
          ))}
          <div className="">
            <p>{t.greeting[4].text}</p>
            <ul className="list-disc list-inside mt-2">
              {t.greeting[4].list.map((item, index) => (
                <li className="mt-1" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center italic text-zinc-500">{t.greeting[5]}</div>
    </div>
  )
}
