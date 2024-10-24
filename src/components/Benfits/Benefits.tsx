import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Home,
  Users,
  Shield,
  Clock,
  Stethoscope,
  Banknote,
  HeartPulse,
  Smile,
  ShieldCheck,
  PiggyBank,
  LucideIcon,
} from "lucide-react";

const benefits = [
  {
    title: "Recuperação Rápida",
    description:
      "80% menos infecções, cuidados exclusivos em casa. O atendimento é personalizado para cada paciente.",
    icon: Home,
  },
  {
    title: "Equipe de Sobreaviso",
    description:
      "Cobertura para folgas e faltas, assistência contínua. Sempre pronta para emergências.",
    icon: Shield,
  },
  {
    title: "Gestão de Equipe",
    description:
      "23 anos de experiência, atendimento 24h. Profissionais qualificados para garantir o melhor serviço.",
    icon: Clock,
  },
  {
    title: "Isenção Trabalhista",
    description:
      "Sem ônus por processos trabalhistas em 23 anos. Garantimos segurança jurídica e tranquilidade.",
    icon: Stethoscope,
  },
  {
    title: "Menos Infecções",
    description:
      "80% menos risco comparado ao hospital. A segurança do paciente é nossa prioridade.",
    icon: HeartPulse,
  },
  {
    title: "Atendimento 24h",
    description:
      "Suporte administrativo e enfermeiros sempre disponíveis. Acompanhamento médico contínuo e eficaz.",
    icon: Clock,
  },
  {
    title: "Qualidade de Vida",
    description:
      "Comodidade e assistência personalizada em casa. Cuidamos do bem-estar e conforto do paciente.",
    icon: Smile,
  },
  {
    title: "Segurança Familiar",
    description:
      "Cuidadores selecionados, tranquilidade para a família. Monitoramento constante para garantir paz de espírito.",
    icon: ShieldCheck,
  },
  {
    title: "Redução de Custos",
    description:
      "Mais econômico que internação hospitalar. Custos controlados e eficientes para o orçamento familiar.",
    icon: PiggyBank,
  },
];

export const Benefits = () => {
  return (
    <section className="flex flex-col gap-20 px-6 md:px-16 py-20">
      <div className="flex-1 flex flex-col gap-4">
        <span className="title-section">Benefícios</span>
        <h2 className="text-4xl max-w-sm">
          Veja os Benefícios de contratar nossos serviços.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {benefits.map((benefit) => (
          <Card
            key={benefit.title}
            className="flex flex-col rounded-none shadow-none border-none"
          >
            <CardHeader className="p-0">
              <CardTitle className="flex flex-col gap-4">
                <benefit.icon
                  strokeWidth={1.5}
                  className="h-8 w-8  text-blue-500"
                />
                <h3>{benefit.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col gap-4">
                <p>{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
