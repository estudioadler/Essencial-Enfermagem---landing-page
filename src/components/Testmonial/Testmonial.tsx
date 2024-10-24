"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

interface Testemunho {
  nome: string;
  cargo: string;
  mensagem: string;
}
const testemunhos: Testemunho[] = [
  {
    nome: "João Pereira",
    cargo: "Filho de Cliente",
    mensagem:
      "Estou extremamente satisfeito com os cuidados que minha mãe recebeu. A equipe é atenciosa e sempre pronta para ajudar. Isso trouxe muita paz de espírito para nossa família.",
  },
  {
    nome: "Maria da Luz",
    cargo: "Cliente",
    mensagem:
      "Os cuidadores são muito profissionais e carinhosos. Sinto-me segura e bem cuidada em suas mãos. Agradeço a todos pelo excelente trabalho!",
  },
  {
    nome: "Carlos Almeida",
    cargo: "Filho de Cliente",
    mensagem:
      "Agradeço pela atenção e carinho que meu pai recebeu. Ele se sente muito mais feliz e ativo desde que começou a receber os cuidados de vocês.",
  },
  {
    nome: "Ana Clara",
    cargo: "Cliente",
    mensagem:
      "Estou muito grata pela dedicação da equipe. Eles não apenas cuidam de mim, mas também me fazem companhia, o que é muito importante para mim.",
  },
  {
    nome: "Ricardo Mendes",
    cargo: "Filho de Cliente",
    mensagem:
      "A experiência tem sido incrível. A equipe é sempre pontual e extremamente cuidadosa. Minha mãe está mais saudável e feliz desde que começou a receber os cuidados.",
  },
  {
    nome: "Eliane Souza",
    cargo: "Cliente",
    mensagem:
      "Os serviços prestados são excepcionais. Sinto-me valorizada e respeitada. É ótimo saber que posso contar com profissionais tão competentes.",
  },
];

export default function Testimonial() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <div className="w-full container mx-auto py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4 lg:ml-6">
        <span className="title-section">Depoimentos</span>
        <h2 className="text-4xl max-w-sm">
          O que nossos clientes dizem sobre nós{" "}
        </h2>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testemunhos.map((testemunho, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <Card className="border-none shadow-none bg-secondary md:bg-background rounded-lg">
                <CardContent className="flex flex-col gap-4 aspect-square justify-center items-start p-6">
                  <div className="flex flex-col items-start">
                    <p className="text-right">{testemunho.nome}</p>
                    <p className="text-right text-muted-foreground">
                      {testemunho.cargo}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <Quote className="size-3" />
                    </div>
                    <p>{testemunho.mensagem}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
