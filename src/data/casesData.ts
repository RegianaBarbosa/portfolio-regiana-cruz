import type { CaseStudy } from "../types/case";
import { getCaseScreens } from "../utils/loadScreens";

// Imagens do Bilro Arte
import heroImg from "../assets/imgs/case-bilroarte/ProjectPage-hero.png";
import corredorRendeiras from "../assets/imgs/case-bilroarte/corredor.png";
import artesas from "../assets/imgs/case-bilroarte/participantes-do-focus-group.png";
import almofadaRendaBilro from "../assets/imgs/case-bilroarte/almofada.jpg";
import mapaEmpatia from "../assets/imgs/case-bilroarte/mapaEmpatia-BilroArte.png";
import mapaContexto from "../assets/imgs/case-bilroarte/mapaContexto-BilroArte.png";
import mapaWireframes from "../assets/imgs/case-bilroarte/mapaWireframes-bilroarte.png";
import fluxoUsuario from "../assets/imgs/case-bilroarte/fluxoUsuario-bilroarte.png";
import dashboardHipotese from "../assets/imgs/case-bilroarte/dashboardVendasInicial.png";
import dashboardTeste from "../assets/imgs/case-bilroarte/teste.png";
import dashboardTradeoff from "../assets/imgs/case-bilroarte/dashboardVendasFinal.png";



export const casesData: Record<string, CaseStudy> = {
  "bilro-arte": {
    slug: "bilro-arte",
    metaTitle: "Bilro Arte | UX/UI Case - Regiana Cruz",
    hero: {
      tags: [
        "E-COMMERCE",
        "INCLUSÃO DIGITAL",
        "UX RESEARCH",
        "TESTE DE USABILIDADE",
      ],
      title: "Bilro Arte",
      description:
        "Aplicativo de venda online para artesãs com baixa familiaridade digital, priorizando autonomia e simplicidade.",
      role: "UX Designer",
      context: "Projeto Acadêmico - IFMA/ISEP",
      market: "E-commerce Criativo",
      duration: "7 meses (2023 - 2024)",
      heroImage: heroImg,
    },
    contextProblem: {
      title: "Renda de Bilro",
      paragraphs: [
        `Em Raposa (MA), a confecção da renda de bilro ultrapassa a atividade econômica: é **patrimônio cultural transmitido entre gerações**. Apesar da sofisticação e do alto valor agregado das peças, a comercialização sempre esteve presa ao alcance geográfico local, concentrada no turismo presencial e em intermediários que retinham grande parte da margem de lucro.`,
        `O mercado online parecia a saída natural, mas plataformas consolidadas de *e-commerce* partem do pressuposto de que todo usuário já domina habilidades digitais. Para um público de artesãs que se autodeclara **leigas no uso de smartphones**, esses sistemas geravam confusão e abandono.`,
        `O projeto **"Bilro Arte"** surgiu com o objetivo de construir essa ponte: criar um aplicativo mobile sob medida, capaz de transformar tarefas complexas de gestão de vendas em fluxos simples, guiados e acessíveis.`,
      ],
      sideImages: [almofadaRendaBilro, corredorRendeiras, artesas],
      problemDefinition: {
        badge: "DEFINIÇÃO DO PROBLEMA",
        question:
          "Como permitir que rendeiras com pouca experiência digital consigam vender e gerenciar seus produtos online de forma simples e autônoma?",
      },
      bulletPoints: [
        "Vendas limitadas ao turismo local e intermediários (baixa margem).",
        "Alta fricção e insegurança com plataformas tradicionais de e-commerce.",
        "Necessidade de transmitir o valor cultural da renda de bilro no ambiente digital.",
      ],
    },
    designProcess: {
      description:
        "Utilizamos a abordagem do Design Thinking para selecionar e adaptar as ferramentas técnicas mais adequadas ao contexto de baixa literacia digital das artesãs, focando sempre na redução da carga cognitiva.",
      phases: [
        {
          items: [
            "Desk Research",
            "Análise de Similares",
            "Grupos Focais",
            "Mapa de Empatia",
          ],
        },
        {
          items: ["Personas", "Mapas Mentais", "Histórias do Usuário"],
        },
        {
          items: ["Brainstorming com equipe", "Fluxos do Usuário", "Sketches"],
        },
        {
          items: [
            "Wireframes",
            "Protótipo de alta fidelidade",
            "Checklist de Acessibilidade",
            "Testes de Usabilidade",
          ],
        },
      ],
      objective:
        "Projetar uma experiência mobile inclusiva e de baixa carga cognitiva, permitindo que rendeiras cadastrem produtos, acompanhem vendas e gerenciem pedidos sem exigir conhecimento prévio de tecnologia.",
    },
    researchFindings: {
      title: "3 evidências centrais que direcionaram o design do produto",
      findings: [
        {
          number: "01",
          title: "DEPENDÊNCIA DE INTERMEDIÁRIOS",
          finding:
            "Vendas concentradas em feiras e turismo, reduzindo a margem de lucro e autonomia das artesãs.",
          solution:
            "Criamos um canal direto de venda B2C fácil e sem intermediários.",
        },
        {
          number: "02",
          title: "BAIXA FAMILIARIDADE DIGITAL",
          finding:
            "A complexidade de apps convencionais causava bloqueio e abandono de uso.",
          solution:
            "Priorizamos fluxos lineares, termos simples e redução drástica de termos técnicos.",
        },
        {
          number: "03",
          title: "VALORIZAÇÃO CULTURAL",
          finding:
            "O processo de confecção manual precisava ser valorizado para justificar o preço justo.",
          solution:
            "Destacamos a história da artesã e a origem da confecção dentro do fluxo de venda.",
        },
      ],
      artifacts: [
        { label: "MAPA DE EMPATIA", image: mapaEmpatia },
        { label: "MAPA DO CONTEXTO", image: mapaContexto },
        { label: "WIREFRAMES", image: mapaWireframes },
        { label: "FLUXO DO USUÁRIO", image: fluxoUsuario },
      ],
    },
    usabilityTesting: {
      title: "Validação prática com artesãs locais",
      description:
        "Testes de Usabilidade moderados realizados na Secretaria de Turismo de Raposa (MA) com 3 rendeiras da comunidade.",
      cards: [
        {
          title: "CADASTRO DO PERFIL",
          badge: "NAVEGAÇÃO",
          problem:
            "Formulário extenso gerava abandono e confusão nas usuárias.",
          decision:
            "Processo dividido em etapas curtas. Campos complementares tornados opcionais.",
        },
        {
          title: "CADASTRO DE PRODUTOS",
          badge: "COMPONENTES",
          problem:
            "Excesso de textos explicativos e baixa percepção de alguns componentes.",
          decision:
            "Reorganização de etapas, redução de textos, tooltips contextuais e substituição de checkboxes por radio buttons.",
        },
        {
          title: "WCAG 2.2",
          badge: "ACESSIBILIDADE",
          problem:
            "Contraste insuficiente e áreas de toque abaixo do mínimo recomendado.",
          decision:
            "Ajuste de paleta de cores, aumento de áreas de toque e validação de hierarquia visual.",
        },
      ],
    },
    criticalDecision: {
      title: "A Remoção do Dashboard de Vendas",
      columns: [
        {
          badge: "HIPÓTESE",
          title: "Dashboard financeiro",
          text: "Criamos uma tela com gráficos e indicadores acreditando que isso ajudaria no controle financeiro do negócio.",
          image: dashboardHipotese,
        },
        {
          badge: "EVIDÊNCIAS",
          title: "Tela ignorada",
          text: "Durante os testes, as rendeiras ignoraram a tela ou relataram dificuldade para entender sua utilidade. O principal interesse era acompanhar quanto haviam vendido no mês, não analisar indicadores detalhados.",
          image: dashboardTeste,
        },
        {
          badge: "DECISÃO",
          title: "Resumo na tela inicial",
          text: "Removemos a tela exclusiva de 'Ganhos' e colocamos um resumo simples de vendas integrado à tela inicial.",
          image: dashboardTradeoff,
        },
      ],
      tradeOff:
        "Nem toda funcionalidade gera valor para todos os públicos.\n\nProjetar para baixa familiaridade digital exige reduzir complexidade e focar apenas no que é realmente útil para o usuário.",
    },
    prototypeScreens: {
      title: "Protótipo testado e validado",
      screens: getCaseScreens("case-bilroarte"),
    },
    impactResults: {
      title: "Transformando inclusão digital em autonomia econômica",
      description:
        "Bilro Arte provou como o design focado em simplicidade e contexto sociocultural pode viabilizar a presença digital de comunidades artesanais sem gerar barreiras de uso.",
      bulletPoints: [
        "Interface Low-friction",
        "Cadastro guiado de produtos",
        "Gestão simplificada de pedidos",
        "Inclusão e acessibilidade",
      ],
      learning: {
        badge: "APRENDIZADO",
        quote:
          "UX não é adicionar recursos, mas saber identificar quais realmente devem existir.",
        description:
          "Testes com usuárias reais demonstraram que uma funcionalidade padrão de um mercado pode gerar ruído e resistência em públicos com baixa literacia digital.",
      },
    },
  },
};
