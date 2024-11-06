import Link from "next/link"
import { Mail, PhoneCall, Rocket } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <div
      className="w-full bg-cover py-20 lg:py-40"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('backgrounds/abstrakt-digital.jpg')",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 py-14 text-center">
          <div>
            <Badge>Werde aktiv</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-regular max-w-xl text-3xl tracking-tighter text-neutral-100 md:text-5xl">
              Starte jetzt mit deinem digitalen Level-Up!
            </h3>
            <p className="text-neutral-400 max-w-xl text-lg leading-relaxed tracking-tight">
              Deine professionelle und persönliche Beratung wartet auf Dich.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="icon" variant="outlineDark" asChild>
              <a href="tel:+4915254237271">
                <PhoneCall className="size-5" />
              </a>
            </Button>
            <Button size="icon" variant="outlineDark" asChild>
              <a href="mailto:info@davidwarmuth.de?subject=Anfrage%20über%20www.davidwarmuth.de">
                <Mail className="size-5" />
              </a>
            </Button>
            <Button asChild>
              <Link href="/kontakt#formular" className="flex gap-2">
                Los geht&apos;s <Rocket className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
