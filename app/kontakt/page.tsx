import { Building2, Mail, PhoneCall } from "lucide-react"

import { ContactForm } from "@/components/contact-form"

export default function KontaktPage() {
  return (
    <>
      <section className="mx-auto flex min-h-[calc(100svh-291px)] max-w-screen-2xl flex-col lg:flex-row">
        <div className="flex flex-1 flex-col gap-6 px-8 py-14 sm:px-20 sm:py-28">
          <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter lg:text-5xl">
            Kontakt
          </h2>
          <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight">
            Melde Dich gerne jeder Zeit bei uns über das beistehende
            Kontaktformular. <br />
            Oder erreiche uns über die folgenden Kontaktdaten.
          </p>
          <div className="mt-2 flex flex-col gap-4">
            <p className="flex items-start gap-4">
              <Building2 className="text-primary size-5" />
              <span>
                Reinaldstr. 15 <br />
                40882 Ratingen
              </span>
            </p>
            <a
              href="tel:+4915254237271"
              className="hover:text-muted-foreground flex items-center gap-4"
            >
              <PhoneCall className="text-primary size-5" />
              <span>+49 152 54237271</span>
            </a>
            <a
              href="mailto:info@davidwarmuth.de?subject=Anfrage%20über%20www.davidwarmuth.de"
              className="hover:text-muted-foreground flex items-center gap-4"
            >
              <Mail className="text-primary size-5" />
              <span>info@davidwarmuth.de</span>
            </a>
          </div>
        </div>
        <div
          id="formular"
          className="bg-accent/80 dark:bg-accent/40 flex flex-1 flex-col gap-6 px-8 py-14 sm:px-20 sm:py-28"
        >
          <ContactForm />
        </div>
      </section>
    </>
  )
}
