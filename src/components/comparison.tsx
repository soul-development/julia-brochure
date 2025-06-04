import { useT } from "@/hooks/use-t"
import { Table, Tbody, Td, Th, Thead, Tr } from "./table"

export const Comparison = () => {
  const t = useT()
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl text-zinc-800 font-medium">
        {t.comparison.title}
      </h2>
      <Table>
        <Thead>
          {t.comparison.table.headers.map((header) => (
            <Th key={header}>{header}</Th>
          ))}
        </Thead>
        <Tbody>
          {t.comparison.table.rows.map((row, index) => (
            <Tr key={index}>
              {row.map((el, index) => (
                <Td
                  key={index}
                  className={index === 0 ? "whitespace-nowrap" : undefined}>
                  {el}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div className="mt-10 bg-white shadow rounded-lg p-5">
        <h3 className="text-2xl text-zinc-800 font-medium">{t.comparison.disclaimer.title}</h3>
        <ul className="list-decimal list-inside">
          {t.comparison.disclaimer.list.map((item) => (
            <li className="mt-5" key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
