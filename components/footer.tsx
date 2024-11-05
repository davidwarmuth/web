import Image from "next/image"
import Link from "next/link"
import fullLogo from "@/public/logo/DW-Logo-Name-Slogan-zoom.svg"
import { LinkIcon, Mail, PhoneCall } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const items: NavItem[] = siteConfig.lawNav

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="text-muted-foreground mx-auto grid max-w-screen-2xl items-center justify-items-center gap-6 border-t px-4 py-6 text-center sm:grid-cols-[1fr,auto,1fr,auto,1fr] sm:text-left lg:flex lg:justify-around">
        <Link href="/" className="sm:col-start-2">
          <Image
            src={fullLogo}
            alt="Logo von David Warmuth IT-Dienstleistungen"
            className="w-48 opacity-75 dark:invert"
          />
        </Link>
        <p className="sm:col-start-4">
          David Warmuth <br /> IT-Dienstleistungen <br /> Reinaldstr. 15 <br />{" "}
          40882 Ratingen
        </p>
        <div className="flex flex-col gap-2 sm:col-start-4">
          <a
            href="tel:+4915254237271"
            className="hover:text-foreground flex items-center gap-3"
          >
            <PhoneCall className="size-9 rounded border-2 p-2" />
            <span className="text-muted-foreground">+49 (0)152 54237271</span>
          </a>
          <a
            href="mailto:info@davidwarmuth.de?subject=Anfrage%20über%20www.davidwarmuth.de"
            className="hover:text-foreground flex items-center gap-3"
          >
            <Mail className="size-9 rounded border-2 p-2" />
            <span className="text-muted-foreground">info@davidwarmuth.de</span>
          </a>
          <Link
            href="/kontakt"
            className="hover:text-foreground flex items-center gap-3"
          >
            <LinkIcon className="size-9 rounded border-2 p-2" />
            <span className="text-muted-foreground">Kontakt-Seite</span>
          </Link>
        </div>
        <ul className="flex flex-col items-center gap-1 sm:col-start-2 sm:row-start-2">
          {items.map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-1">
              <Link
                href={item.href || ""}
                className={cn(
                  "text-muted-foreground flex items-center text-sm font-medium",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-background border-t py-4 text-center">
        <p className="text-muted-foreground container text-sm">
          Copyright © {new Date().getFullYear()} - davidwarmuth
        </p>
      </div>
    </footer>
  )
}
