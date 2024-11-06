import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";
import { SendHorizontal } from "lucide-react";

export function Hero() {
    return (
        <div
    className="w-full bg-cover bg-bottom"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('backgrounds/abstrakt-bronze.jpg')",
    }}
  >
    {/* <Image
      src={heroImg}
      alt="Hero Bild Tastatur, Maus, Tasse und Hand schwarz-weiß"
      className="absolute left-0 top-0 h-full object-cover"
    /> */}
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
        <div className="flex flex-col gap-4">
          <h2 className="font-regular max-w-2xl text-center text-5xl tracking-tighter text-neutral-100 md:text-7xl">
            Digital denken, Zukunft gestalten.
          </h2>
          <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-neutral-400 md:text-xl">
            Professionelle Dienstleistungen im Bereich IT-Beratung, Wartung,
            Softwareentwicklung sowie Webdesign und -entwicklung.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button size="lg" variant="outlineDark" asChild>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3"
            >
              GitHub <Icons.gitHub className="size-5" />
            </a>
          </Button>
          <Button size="lg" asChild>
            <Link href="/kontakt" className="flex gap-3">
              Kontakt <SendHorizontal className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
    );
}
