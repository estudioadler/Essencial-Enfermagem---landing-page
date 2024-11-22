import type { Metadata } from "next";
import "./globals.css";
import { Manrope as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import localFont from 'next/font/local'
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const paralucent = localFont({
  variable: "--font-paralucent",
  src: [
    // Extra Light (200)
    {
      path: "../../public/fonts/paralucent-extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/paralucent-extralightitalic.woff2",
      weight: "200",
      style: "italic",
    },
    
    // Light (300)
    {
      path: "../../public/fonts/paralucent-thin.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/paralucent-thinitalic.woff2",
      weight: "300",
      style: "italic",
    },
    
    // Light (400)
    {
      path: "../../public/fonts/paralucent-light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/paralucent-lightitalic.woff2",
      weight: "400",
      style: "italic",
    },
    
    // Medium (500)
    {
      path: "../../public/fonts/paralucent-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/paralucent-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
    
    // Demi Bold (600)
    {
      path: "../../public/fonts/paralucent-demibold.woff2",
      weight: "600",  
      style: "normal",
    },
    {
      path: "../../public/fonts/paralucent-demibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
    
    // Bold (700)
    {
      path: "../../public/fonts/paralucent-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/paralucent-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
    
    // Heavy (800)
    {
      path: "../../public/fonts/paralucent-heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/paralucent-heavyitalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
})

export const metadata: Metadata = {
  title: "Essencial Enfermagem",
  description: "Conectamos famílias com cuidadores profissionais de confiança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background antialiased",
          paralucent.className

        )}>{children}</body>
    </html>
  );
}
