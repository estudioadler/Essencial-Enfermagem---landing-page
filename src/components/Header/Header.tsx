import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react";
 
export const Header = () => {
  const navLinks = [
    {
      label: "quem somos",
      href: "#",
    },
    {
      label: "serviços",
      href: "#",
    },
    {
      label: "benefícios",
      href: "#",
    },
    {
      label: "diferencial",
      href: "#",
    },
    {
      label: "depoimentos",
      href: "#",
    },
    {
      label: "trabalhe conosco",
      href: "#",
    },
  ];
  return (
    <header className="w-full flex justify-between items-center px-6 sm:px-16 pt-8 sm:pt-12">
      <Link href="#" className="flex gap-2 items-center" draggable={false}>
        <Image
          src="/symb-logo.svg"
          alt="logotipo essencial enfermagem"
          width={28}
          height={28}
        />
        <div className="flex flex-col -space-y-1.5 leading-none text-blue-900 mb-1">
          <span className="font-semibold text-sm">essencial</span>
          <span className="font-semibold text-sm">enfermagem</span>
        </div>
      </Link>

      <nav className="hidden lg:flex">
        <ul className="flex gap-4 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="uppercase text-xs"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Sheet>
      <SheetTrigger asChild className="flex lg:hidden">
        <Button variant="ghost" size={"icon"}>
          <div className="flex flex-col items-end gap-1">
            <div className="h-0.5 w-8 bg-blue-950 rounded-full"/>
            <div className="h-0.5 w-5 bg-blue-950 rounded-full"/>
            <div className="h-0.5 w-2.5 bg-blue-950 rounded-full"/>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px]">
        <div className="flex flex-col gap-4 py-4">
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start">
              Quem Somos
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start">
              Serviços
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start">
              Diferencial
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start">
              Depoimentos
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start">
              Trabalhe Conosco
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start">
              Contato
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
    </header>
  );
};
