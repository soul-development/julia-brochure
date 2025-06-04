import { useT } from "@/hooks/use-t"
import alert from "/alert.svg"
export const Disclaimer = () => {
  const t = useT()
  return (
    <div className="mt-20 text-zinc-800 rounded-lg shadow-lg p-10 flex flex-col gap-5 bg-white relative ">
      <img src={alert} alt="" className="absolute top-0 left-0 w-50 h-50 opacity-5"/>
      {t.disclaimer.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
