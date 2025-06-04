import { cn } from "@/lib/utils"

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left rtl:text-right dark:text-gray-400">
        {children}
      </table>
    </div>
  )
}

export const Thead = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
      <tr>{children}</tr>
    </thead>
  )
}

export const Th = ({ children }: { children: React.ReactNode }) => {
  return (
    <th scope="col" className="px-6 py-3">
      {children}
    </th>
  )
}

export const Tbody = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>
}

export const Tr = ({ children }: { children: React.ReactNode }) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
      {children}
    </tr>
  )
}

export const Td = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <td className={cn("px-6 py-4 whitespace-pre-line", className)}>
      {children}
    </td>
  )
}
