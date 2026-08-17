import { ServiceCard } from "../components/shared/ServiceCard";
import iconUx from "../assets/icons/psychology_violeta.svg";
import iconUi from "../assets/icons/design_services_violeta.svg";
import iconCode from "../assets/icons/code_violeta.svg";
import { ArrowRightBulletIcon } from "../components/shared/ArrowRightBulletIcon";
import { SectionHeader } from "./cases/SectionHeader";

interface ServicesProps {
  id: string;
}

const servicesData = [
  {
    title: "UX Design & Research",
    icon: iconUx,
    items: [
      "Descoberta de necessidades e oportunidades através de pesquisa e análise de usuários.",
      "Estruturação de jornadas, fluxos e arquiteturas de informação intuitivas.",
      "Testes de usabilidade para obter feedback e aprimorar soluções.",
      "Implementação de princípios de design inclusivo e acessível em projetos.",
    ],
  },
  {
    title: "UI Design & Design Systems",
    icon: iconUi,
    items: [
      "Criação de interfaces acessíveis, consistentes e visualmente atraentes.",
      "Desenvolvimento de protótipos e wireframes interativos para validação de ideias.",
      "Construção e evolução de Design Systems para escalabilidade de produtos.",
      "Definição de padrões visuais que fortalecem a identidade e a usabilidade.",
    ],
  },
  {
    title: "Frontend Development",
    icon: iconCode,
    items: [
      "Desenvolvimento de interfaces modernas e responsivas para web.",
      "Tradução de protótipos em experiências funcionais e acessíveis.",
      "Implementação de componentes reutilizáveis alinhados ao Design System.",
      "Garantia de qualidade visual e técnica em colaboração com equipes de produto e tecnologia.",
    ],
  },
];

export const Services = ({ id }: ServicesProps) => {
  return (
    <section
      id={id}
      className="w-full py-16 md:py-24 flex flex-col items-center justify-center scroll-mt-16"
    >
      <div className="w-full mx-auto px-6 md:px-16 lg:px-32">
        
        <SectionHeader className="mb-12" tag="Meus Serviços" title="O que posso lhe oferecer" />

        {/* GRID DOS CARDS DE SERVIÇOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
