import { useT } from "@/hooks/use-t"
import React from "react"

export const Faq = () => {
  const t = useT()
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center text-blue-950">{t.faq.title}</h2>
      <div className="mt-10 flex flex-col gap-12">
        {t.faq.items.map((item) => (
          <div key={item.question}>
            <h3 className="text-2xl text-blue-950 font-medium">
              {item.question}
            </h3>
            <div className="mt-6 flex flex-col gap-5">
              {item.items.map((item, index) => {
                if (typeof item === "string" || React.isValidElement(item)) {
                  return (
                    <div className="whitespace-pre-line" key={index}>
                      {item}
                    </div>
                  )
                }
                return (
                  <div key={index}>
                    {"title" in item && item?.title && (
                      <h4 className="text-xl text-blue-950 font-medium">
                        {item.title}
                      </h4>
                    )}
                    <ul className="mt-3 list-disc list-inside">
                      {"list" in item && item.list.map((item, index) => (
                        <li className="mt-2" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
