import type { Metadata } from "next";
import "./globals.css";
import { Manrope as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const paralucent = localFont({
  variable: "--font-paralucent",
  src: [
    // Extra Light (200)
    {
      path: "../../public/fonts/Paralucent-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paralucent-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },

    // Light (300)
    {
      path: "../../public/fonts/Paralucent-thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paralucent-thinItalic.ttf",
      weight: "300",
      style: "italic",
    },

    // Light (400)
    {
      path: "../../public/fonts/Paralucent-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paralucent-LightItalic.ttf",
      weight: "400",
      style: "italic",
    },

    // Medium (500)
    {
      path: "../../public/fonts/Paralucent-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paralucent-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },

    // Demi Bold (600)
    {
      path: "../../public/fonts/Paralucent-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paralucent-DemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },

    // Bold (700)
    {
      path: "../../public/fonts/Paralucent-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paralucent-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },

    // Heavy (800)
    {
      path: "../../public/fonts/Paralucent-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paralucent-HeavyItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
});

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
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          paralucent.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
