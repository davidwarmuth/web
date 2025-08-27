import type { Metadata } from "next";
/* import localFont from "next/font/local"; */
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { fontMono, fontSans } from "./fonts/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
