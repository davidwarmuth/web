import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-2xl">Diese Seite befindet sich im Aufbau ...</h2>
      <ThemeToggle />
    </div>
  );
}