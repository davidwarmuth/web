import Image from "next/image"
import Link from "next/link"
import fullLogo from "@/public/logo/DW-Logo-Name-Slogan-zoom.svg"
import { Menu } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

const itemsLaw: NavItem[] = siteConfig.lawNav
const itemsMain: NavItem[] = siteConfig.mainNav

export function Header() {
  return (
    <header className="bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button size="icon" variant="ghost" asChild>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
            </Link>
            </Button>
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild className="sm:hidden">
                <Button size="icon" variant="ghost">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col">
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    David Warmuth IT-Dienstleistung
                  </SheetTitle>
                  <SheetDescription className="flex justify-center">
                    <SheetClose asChild>
                      <Link href="/">
                        <Image
                          src={fullLogo}
                          alt="Logo von David Warmuth IT-Dienstleistungen"
                          className="w-48 opacity-75 sm:col-start-2 dark:invert"
                        />
                      </Link>
                    </SheetClose>
                  </SheetDescription>
                </SheetHeader>
                <div className="my-4 flex flex-1 items-start justify-center border-y py-4">
                  {itemsMain.map(
                    (item, index) =>
                      item.href && (
                        <SheetClose key={index} asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "text-muted-foreground flex items-center text-xl font-medium"
                              /* item.disabled && "cursor-not-allowed opacity-80" */
                            )}
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      )
                  )}
                </div>
                <SheetFooter>
                  <ul className="flex flex-col items-center gap-1 sm:col-start-2 sm:row-start-2">
                    {itemsLaw.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
                        <SheetClose asChild>
                          <Link
                            href={item.href || ""}
                            className={cn(
                              "text-muted-foreground flex items-center text-sm font-medium",
                              item.disabled && "cursor-not-allowed opacity-80"
                            )}
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
