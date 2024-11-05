"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import logo from "@/public/icon/DW-Icon-gr.svg"
import logoDark from "@/public/icon/DW-Icon-sw.svg"
import { useTheme } from "next-themes"

export function LogoDW({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    setTheme(resolvedTheme)
  }, [resolvedTheme])

  // Falls das Theme nicht geladen ist, zeige einen Platzhalter an
  if (!theme) return <div className="bg-card size-12 rounded-sm"></div>

  return (
    <Image
      src={theme === "dark" ? logoDark : logo}
      alt="Logo DW IT-Dienstleistungen"
      className={className || "size-12"}
    />
  )
}
