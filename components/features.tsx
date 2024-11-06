import {
    CodeXml,
    Headset,
    MessagesSquare,
    Paintbrush,
    UserRoundPlus,
    Wrench,
  } from "lucide-react"
  
  import { cn } from "@/lib/utils"
  
  const iconStyle = "size-6 sm:size-9"
  
  const features = [
    {
      icon: <MessagesSquare className={iconStyle} />,
      title: "IT-Beratung",
      description: "Profitiere von unseren Erfahrungen.",
    },
    {
      icon: <Paintbrush className={iconStyle} />,
      title: "Webdesign",
      description: "Wir designen moderne Webseiten und Web-Apps.",
    },
    {
      icon: <CodeXml className={iconStyle} />,
      title: "Software- / Webentwicklung",
      description: "Wir entwickeln schnelle und zuverlässige Web-Apps.",
    },
    {
      icon: <UserRoundPlus className={iconStyle} />,
      title: "Neukundengewinnung",
      description: "Neue Aufträge durch eine solide Internet-Präsenz.",
    },
    {
      icon: <Wrench className={iconStyle} />,
      title: "IT-Wartung",
      description: "Damit Du immer auf dem neusten Stand bleibst.",
    },
    {
      icon: <Headset className={iconStyle} />,
      title: "IT-Support",
      description: "Professionell und zuvorkommend.",
    },
  ]
  
  export function Features() {
    return (
      <div className="w-full py-10 bg-accent dark:bg-card">
        <div className="container mx-auto">
          <div className="flex flex-col items-start gap-4 py-10">
            <div className="flex flex-col gap-2">
              <h2 className="font-regular text-3xl tracking-tighter md:text-5xl lg:max-w-xl">
                Was wir anbieten:
              </h2>
              <p className="text-muted-foreground max-w-xl text-lg leading-relaxed tracking-tight lg:max-w-xl">
                Wir unterstützen Deinen digitalen Erfolg.
              </p>
            </div>
            <div className="flex w-full flex-col gap-10 pt-12">
              <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    {...feature}
                    className={index == 0 || index == 3 ? "w-full" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export function FeatureCard({
    icon,
    title,
    description,
    className,
  }: {
    icon: React.ReactNode
    title: string
    description: string
    className?: string
  }) {
    return (
      <div
        className={cn(
          "bg-card/50 hover:bg-card dark:bg-accent/30 dark:hover:bg-accent/60 text-muted-foreground hover:text-primary flex h-full flex-row items-center gap-6 rounded-md border p-6 backdrop-blur",
          className
        )}
      >
        <div className="min-w-6 text-inherit sm:min-w-9">{icon}</div>
        <div className="flex flex-col gap-1">
          <p className="text-foreground">{title}</p>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    )
  }
 