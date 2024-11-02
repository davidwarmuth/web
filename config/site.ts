export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "David Warmuth IT-Dienstleistungen",
  description:
    "Professionelle Dienstleistungen im Bereich IT-Beratung, Wartung, Softwareentwicklung sowie Webdesign und -entwicklung.",
  mainNav: [
    {
      title: "Kontakt",
      href: "/kontakt",
    },
  ],
  lawNav: [
    {
      title: "AGB",
      href: "/agb",
    },
    {
      title: "Impressum",
      href: "/impressum",
    },
    {
      title: "Datenschutz",
      href: "/datenschutz",
    },
  ],
  links: {
    github: "https://github.com/davidwarmuth",
  },
}
