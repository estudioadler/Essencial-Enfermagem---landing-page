"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Equal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const menuItems = [
  { name: "Quem Somos", href: "#quem-somos" },
  { name: "Serviços", href: "#servicos" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Diferencial", href: "#diferencial" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Trabalhe Conosco", href: "#trabalhe-conosco" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`absolute top-0 left-0 right-0 z-50 ${
        isOpen ? "m-2 bg-blue-50  rounded-lg" : "bg-blue-700 p-2"
      }`}
    >
      <header className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logotipo */}
            <Link href="/">
              {isOpen ? (
                <Image
                  src="/logo-dark.svg"
                  alt="Logo Essencial Enfermagem"
                  width={128}
                  height={128}
                />
              ) : (
                <Image
                  src="/logo.svg"
                  alt="Logo Essencial Enfermagem"
                  width={128}
                  height={128}
                />
              )}
            </Link>

            {/* Menu Hamburger */}
            <Button
              variant={isOpen ? "default" : "secondary"}
              size="icon"
              aria-label="Menu"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Equal className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
      </header>

      {/* Menu deslizante */}
      <div
          className={`bg-blue-50 overflow-hidden rounded-lg ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xl text-blue-950"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  );
};
