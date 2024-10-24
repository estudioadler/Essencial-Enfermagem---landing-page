import Image from "next/image";
import React from "react";

const services = [
  {
    title: "CUIDADOR",
    description:
      "Cuidadores de Idosos com formação e qualificação profissional, aptos a realizar:",
    items: [
      "Cuidados, auxílio e orientação no que se refere à higiene pessoal, alimentação, vestuário, locomoção e uso de medicamentos conforme prescrição médica.",
      "Troca de fraldas.",
      "Atividades de rotinas diárias.",
      "Acompanhamento a consultas médicas e exames.",
      "Acompanhamento a passeios e atividades culturais.",
      "Prevenção de quedas.",
      "Prevenção de lesões na pele.",
      "Observação de possíveis problemas de saúde.",
    ],
    imageUrl: "/contact.jpg", // Adicione o caminho da imagem
  },
  {
    title: "ENFERMEIROS",
    description:
      "Nossos enfermeiros especializados em atendimento domiciliar realizam, no conforto da sua casa, diversos procedimentos, sem a necessidade de deslocamento a hospitais, como:",
    items: [
      "Administração de medicamentos endovenosos e intramusculares.",
      "Monitoramento de sinais vitais.",
      "Nebulização e aspiração de vias aéreas.",
      "Cuidados com sondas, traqueostomia, ostomias e cateteres.",
      "Administração de antibioticoterapia.",
      "Higienização e/ou troca de cânula endotraqueal com aspiração.",
      "Cuidados com bolsa de colostomia e sondagem vesical.",
      "Esvaziamento e higienização da bolsa de colostomia e ileostomia.",
      "Curativos de ferida aberta, ferida operatória e em inserção de cateter venoso central.",
    ],
    imageUrl: "/contact.jpg", // Adicione o caminho da imagem
  },
  {
    title: "FISIOTERAPEUTAS",
    description:
      "Nossos Fisioterapeutas são capacitados e especializados no tratamento domiciliar, realizando atividades como:",
    items: [
      "Avaliação física.",
      "Fisioterapia motora e respiratória.",
      "Recuperação e reabilitação motora.",
      "Fisioterapia preventiva para idosos.",
    ],
    imageUrl: "/contact.jpg", // Adicione o caminho da imagem
  },
  {
    title: "NUTRICIONISTAS",
    description:
      "Nossos Nutricionistas são capacitados e especializados no tratamento domiciliar, realizando atividades como:",
    items: [
      "Investigação de hábitos alimentares.",
      "Diagnóstico nutricional.",
      "Elaboração de dieta personalizada.",
    ],
    imageUrl: "/contact.jpg", // Adicione o caminho da imagem
  },
  {
    title: "FONOAUDIÓLOGOS",
    description:
      "Nossos Fonoaudiólogos são capacitados e especializados no tratamento domiciliar, realizando atividades como:",
    items: [
      "Avaliação e orientação.",
      "Intervenção das desordens de deglutição.",
      "Intervenção das expressivas e receptivas (afasias).",
      "Intervenção das desordens vocais.",
      "Intervenção para implantação de recursos de comunicação alternativa.",
    ],
    imageUrl: "/contact.jpg", // Adicione o caminho da imagem
  },
  {
    title: "EQUIPAMENTOS",
    description:
      "Dispomos de empresas parceiras para locação e compra de equipamentos ortopédicos e hospitalares, como:",
    items: [
      "Andadores",
      "Barras de segurança",
      "Bengalas",
      "Cadeiras de rodas",
      "Cama hospitalar manual e motorizada",
      "Cadeiras sanitárias",
      "Guindaste",
      "Nebulizador",
      "E muitos outros!",
    ],
    imageUrl: "/contact.jpg", // Adicione o caminho da imagem
  },
];

export default function ListServices() {
  return (
    <div className="grid grid-cols-5">
      {services.map((service, index) => (
        <React.Fragment key={service.title}>
          {index % 2 === 0 ? (
            // Para índices pares (0, 2, 4), a imagem fica à esquerda
            <>
              <div className="col-span-3">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <div className="col-span-2">
                <h2 className="text-3xl font-bold mb-2">
                  {service.title}
                </h2>
                <p className="text-lg mb-2">{service.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            // Para índices ímpares (1, 3, 5), a imagem fica à direita
            <>
              <div className="col-span-2">
                <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-3">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
