"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const items: NavItem[] = siteConfig.lawNav

export function LawNav() {
  const path = usePathname()
  return (
    <div className="sm:px-6">
      <div className="bg-card grid max-w-screen-lg grid-cols-1 justify-around border border-b-0 sm:mt-6 sm:grid-cols-3 sm:rounded-t-md lg:mx-auto">
        {items.map((item, index) => (
          <Link
            key={item.title}
            href={item.href || ""}
            className={cn(
              "text-muted-foreground flex items-center justify-center p-3 text-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800",
              index <= 1 && "border-r",
              item.href === path && "bg-neutral-50 dark:bg-neutral-900",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
