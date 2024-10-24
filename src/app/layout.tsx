import type { Metadata } from "next";
import "./globals.css";
import { Montserrat as FontSans } from "next/font/google"
import localFont from '@next/font/local'
 
import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const myFont = localFont({
  variable: "--font-mono",
  src: [
    {
      path: "/fonts/Paralucent-thin.ttf",
      weight: "100", // peso fino
    },
    {
      path: "/fonts/Paralucent-ExtraLight.ttf",
      weight: "200", // peso leve
    },
    {
      path: "/fonts/Paralucent-Light.ttf",
      weight: "300", // peso leve
    },
    {
      path: "/fonts/Paralucent-Medium.ttf",
      weight: "500", // peso médio
    },
    {
      path: "/fonts/Paralucent-DemiBold.ttf",
      weight: "600", // peso semi-negrito
    },
    {
      path: "/fonts/Paralucent-Bold.ttf",
      weight: "700", // peso negrito
    },
    {
      path: "/fonts/Paralucent-Heavy.ttf",
      weight: "900", // peso pesado
    },
  ],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          myFont.variable
        )}>{children}</body>
    </html>
  );
}
