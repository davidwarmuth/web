import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

import { LogoDW } from "./dw-logo"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex flex-1 gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <LogoDW />
        <h1 className="hidden flex-col sm:inline-flex">
          <span className="text-xl font-light">David Warmuth</span>
          <span className="text-xs font-semibold">IT-Dienstleistungen</span>
        </h1>
      </Link>
      {items?.length ? (
        <nav className="mx-auto hidden gap-6 sm:mx-0 sm:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground text-md flex items-center font-medium",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
