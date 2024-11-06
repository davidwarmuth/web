import { LawNav } from "@/components/law-nav"

export default function LawLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LawNav />
      {children}
    </>
  )
}
