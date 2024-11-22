
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    value: "item-1",
    trigger: "Cuidadores 24H",
    content: "Equipe feminina ou masculina de acordo com o perfil do paciente.",
  },
  {
    value: "item-2",
    trigger: "Visita técnica",
    content: "Visita e avaliação gratuita para personalização do atendimento.",
  },
  {
    value: "item-3",
    trigger: "Registro dos Cuidadores",
    content: "A família não tem preocupação com questões trabalhistas.",
  },
  {
    value: "item-4",
    trigger: "Substituição do Profissional",
    content: "Em caso de falta, atestado ou férias, faremos a substituição imediata.",
  },
  {
    value: "item-5",
    trigger: "Orçamento Descomplicado",
    content: "Solicite e personalize seu orçamento sem sair de casa.",
  },
  {
    value: "item-6",
    trigger: "Transporte do Cuidador",
    content: "A Cuidadores BH fornece vale-transporte aos profissionais.",
  },
  {
    value: "item-7",
    trigger: "Cuidadores Qualificados",
    content: "Todos os profissionais possuem curso e estágio em casas de repouso.",
  },
  {
    value: "item-8",
    trigger: "Supervisão dos Cuidadores",
    content: "Profissionais monitorados pelo RH, coordenador e sistema de home care.",
  },
  {
    value: "item-9",
    trigger: "Perfil do Cuidador",
    content: "A família escolhe o perfil do cuidador de acordo com o perfil da pessoa atendida.",
  },
  {
    value: "item-10",
    trigger: "Livro Diário",
    content: "Para que tenha documentado todo o histórico de atendimento.",
  },
];

const leftItems = accordionItems.slice(0, 5);
const rightItems = accordionItems.slice(5);

export function DiferencialAccordion() {
  return (
    <section className="px-6 md:px-16 py-20 md:py-32 flex flex-col gap-16 bg-secondary">
      <div className="flex flex-col items-center gap-4">
        <div className="flex-1 flex flex-col gap-4 text-center">
          <span className="title-section">
            nosso diferencial
          </span>
          <h2 className="text-4xl max-w-lg text-center">
            Atendimento Personalizado e Humanizado para Idosos
          </h2>
        </div>
        <p className="max-w-lg text-center">
          nos comprometemos a melhorar a qualidade de vida dos nossos clientes,
          proporcionando tranquilidade e segurança para eles e suas famílias.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
        <div className="lg:w-1/2 w-full">
          <Accordion type="single" collapsible className="w-full">
            {leftItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger><h4>{item.trigger}</h4></AccordionTrigger>
                <AccordionContent><p>{item.content}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="lg:w-1/2 w-full">
          <Accordion type="single" collapsible className="w-full">
            {rightItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger> <h4>{item.trigger}</h4></AccordionTrigger>
                <AccordionContent><p>{item.content}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}