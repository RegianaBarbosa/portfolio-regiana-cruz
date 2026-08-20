import type { CaseStudy } from "../types/case";
import { getCaseScreens } from "../utils/loadScreens";

// Imagens do Bilro Arte
import heroImgBilroArte from "../assets/imgs/case-bilroarte/ProjectPage-hero.png";
import corredorRendeiras from "../assets/imgs/case-bilroarte/corredor.png";
import artesas from "../assets/imgs/case-bilroarte/participantes-do-focus-group.png";
import almofadaRendaBilro from "../assets/imgs/case-bilroarte/almofada.jpg";
import mapaEmpatiaBilroArte from "../assets/imgs/case-bilroarte/mapaEmpatia-BilroArte.png";
import mapaContextoBilroArte from "../assets/imgs/case-bilroarte/mapaContexto-BilroArte.png";
import wireframesBilroArte from "../assets/imgs/case-bilroarte/mapaWireframes-bilroarte.png";
import fluxoUsuarioBilroArte from "../assets/imgs/case-bilroarte/fluxoUsuario-bilroarte.png";
import dashboardHipotese from "../assets/imgs/case-bilroarte/dashboardVendasInicial.png";
import dashboardTeste from "../assets/imgs/case-bilroarte/teste.png";
import dashboardTradeoff from "../assets/imgs/case-bilroarte/dashboardVendasFinal.png";

// Imagens do Persona Tour
import heroImgPersonaTour from "../assets/imgs/case-personatour/personaTourCover.png";
import idososTurismo from "../assets/imgs/case-personatour/idososTurismo.jpg";
import planejamentoViagem from "../assets/imgs/case-personatour/planejamentoViagem.png";
import passeioAcessivel from "../assets/imgs/case-personatour/passeioAcessivel.png";
import mapaEmpatiaPersonaTour from "../assets/imgs/case-personatour/mapaEmpatia-personatour.png";
import userStoryPersonaTour from "../assets/imgs/case-personatour/usestory-personatour.png";
import wireframesPersonaTour from "../assets/imgs/case-personatour/wireframes-personatour.png";
import personaImgPersonaTour from "../assets/imgs/case-personatour/persona-lucia-personatour.png";
import bigFiveSkills from "../assets/imgs/case-personatour/big-five-skills.png";
import luciaValidacao from "../assets/imgs/case-personatour/lucia.png";
import telaQuestionario from "../assets/imgs/case-personatour/prototype_screens/8.png";

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
      title: "Bilro Arte: Plataforma inclusiva para comercialização da Renda de Bilro",
      description:
        "Aplicativo de venda online para artesãs com baixa familiaridade digital, priorizando autonomia e simplicidade.",
      role: "UX Designer",
      context: "Projeto Acadêmico - IFMA/ISEP",
      market: "E-commerce Criativo",
      duration: "7 meses (2023 - 2024)",
      heroImage: heroImgBilroArte,
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
        { label: "MAPA DE EMPATIA", image: mapaEmpatiaBilroArte },
        { label: "MAPA DO CONTEXTO", image: mapaContextoBilroArte },
        { label: "WIREFRAMES", image: wireframesBilroArte },
        { label: "FLUXO DO USUÁRIO", image: fluxoUsuarioBilroArte },
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
        quote:
          "UX não é adicionar recursos, mas saber identificar quais realmente devem existir.",
        description:
          "Testes com usuárias reais demonstraram que uma funcionalidade padrão de um mercado pode gerar ruído e resistência em públicos com baixa literacia digital.",
      },
    },
  },

  "persona-tour": {
    slug: "persona-tour",
    metaTitle: "PersonaTour | UX/UI Case - Regiana Cruz",
    hero: {
      tags: [
        "TURISMO ACESSÍVEL",
        "SISTEMA DE RECOMENDAÇÃO",
        "ACESSIBILIDADE",
        "UX RESEARCH",
      ],
      title: "PersonaTour",
      description:
        "Aplicativo de recomendação turística que personaliza sugestões de pontos turísticos com base na personalidade, preferências e necessidades de acessibilidade do usuário.",
      role: "UX/UI Designer & Scrum Master",
      context: "Projeto Acadêmico - IFMA e ISEP",
      market: "Turismo Acessível",
      duration: "6 meses (Nov 2024 - Abr 2025)",
      heroImage: heroImgPersonaTour,
    },

    contextProblem: {
      title: "Turismo para a Melhor Idade",
      paragraphs: [
        `O envelhecimento da população tem ampliado a participação de pessoas idosas no setor turístico. Apesar desse crescimento, a maioria dos aplicativos de viagem continua sendo projetada para usuários mais jovens, exigindo alto nível de familiaridade digital e desconsiderando limitações físicas, cognitivas e preferências específicas desse público.`,

        `Durante a pesquisa, identificamos que muitos idosos sentiam dificuldade para encontrar roteiros compatíveis com suas necessidades. Informações sobre acessibilidade, distância percorrida, intensidade das atividades e infraestrutura disponível eram dispersas ou difíceis de interpretar.`,

        `O **PersonaTour** nasceu para tornar o planejamento turístico mais simples e personalizado, recomendando pontos de interesse adequados ao perfil, às preferências e às condições de cada viajante idoso.`,
      ],

      sideImages: [idososTurismo, planejamentoViagem, passeioAcessivel],

      problemDefinition: {
        badge: "DEFINIÇÃO DO PROBLEMA",
        question:
          "Como ajudar pessoas idosas a encontrar experiências turísticas compatíveis com suas necessidades, interesses e limitações, sem tornar o processo de planejamento complexo ou cansativo?",
      },

      bulletPoints: [
        "Dificuldade para identificar locais adequados ao perfil do viajante.",
        "Falta de informações claras sobre acessibilidade e esforço físico necessário.",
        "Excesso de opções e sobrecarga de decisão durante o planejamento.",
      ],
    },

    designProcess: {
      description:
        "Aplicamos o Design Thinking para compreender profundamente as necessidades do público idoso e transformar essas descobertas em uma experiência de recomendação simples, confiável e personalizada.",

      phases: [
        {
          items: [
            "Desk Research",
            "Entrevistas com usuários",
            "Benchmarking",
            "Mapa de Empatia",
          ],
        },
        {
          items: [
            "Personas",
            "Histórias do Usuário",
            "Definição de Requisitos",
          ],
        },
        {
          items: ["Sitemap", "Arquitetura da Informação", "Sketches"],
        },
        {
          items: [
            "Wireframes",
            "Protótipo de Alta Fidelidade",
            "Testes de Usabilidade",
          ],
        },
      ],

      objective:
        "Criar uma experiência de descoberta turística personalizada para pessoas idosas, reduzindo a complexidade da tomada de decisão e aumentando a confiança durante o planejamento de viagens.",
    },

    researchFindings: {
      title: "3 descobertas que moldaram a experiência",

      findings: [
        {
          number: "01",
          title: "PREFERÊNCIAS MUITO PARTICULARES",
          finding:
            "Cada usuário possuía interesses, limitações físicas e expectativas diferentes sobre uma viagem.",
          solution:
            "Desenvolvemos um sistema de recomendação baseado em perfil e preferências individuais.",
        },

        {
          number: "02",
          title: "PREOCUPAÇÃO COM ACESSIBILIDADE",
          finding:
            "Informações sobre acessibilidade eram decisivas para a escolha de destinos e atrações.",
          solution:
            "Destacamos indicadores de acessibilidade e nível de esforço físico logo nas recomendações.",
        },

        {
          number: "03",
          title: "SOBRECARGA DE ESCOLHA",
          finding:
            "Muitas opções disponíveis geravam insegurança e dificultavam a tomada de decisão.",
          solution:
            "Priorizamos recomendações personalizadas em vez de apresentar longas listas genéricas.",
        },
      ],

      artifacts: [
        { label: "MAPA DE EMPATIA", image: mapaEmpatiaPersonaTour },
        { label: "PERSONA", image: personaImgPersonaTour },
        { label: "HISTÓRIA DO USUÁRIO", image: userStoryPersonaTour },
        { label: "WIREFRAMES", image: wireframesPersonaTour },
      ],
    },

    usabilityTesting: {
      tagTitle: "Testes de Usabilidade",
      title: "Evidências observadas e oportunidades de melhoria",
      description:
        "Participei da aplicação de 24 sessões de testes moderados. Abaixo estão os principais pontos de atrito identificados e as oportunidades mapeadas para o produto.",

      cards: [
        {
          title: "AVALIAÇÃO DE ACESSIBILIDADE",
          badge: "INTERFACE",
          problem:
            "Usuários tentavam clicar nas legendas achando que eram botões e ficaram confusos com a quantidade de ícones.",
          decision:
            "Separar claramente textos informativos de botões de ação e simplificar o formato da avaliação.",
        },
        {
          title: "TECLADO E FORMULÁRIOS",
          badge: "INTERAÇÃO",
          problem:
            "O teclado virtual cobria botões como 'Entrar' e 'Salvar', fazendo pessoas acharem que a tela travou.",
          decision:
            "Manter os botões de ação fixos ou rolar a tela automaticamente para que fiquem sempre visíveis.",
        },
        {
          title: "GESTÃO DE LISTAS",
          badge: "CLAREZA",
          problem:
            "Houve dúvida entre 'Salvar' e 'Favoritar', além de confusão sobre onde digitar os códigos de listas compartilhadas.",
          decision:
            "Padronizar os termos da interface e tornar os campos de código mais óbvios e intuitivos.",
        },
      ],
    },

    criticalDecision: {
      title: "Equilibrando personalização e esforço",
      columns: [
        {
          badge: "DESAFIO",
          title: "44 perguntas exaustivas",
          text: "O algoritmo de recomendação dependia de 44 perguntas do modelo Big Five para personalizar as recomendações, tornando o cadastro longo e com alto risco de abandono.",
          image: bigFiveSkills,
        },

        {
          badge: "SOLUÇÃO",
          title: "Experiência mais leve",
          text: "Redesenhamos o onboarding com 15 perguntas divididas em três etapas e criamos a personagem Lúcia para conduzir a experiência.",
          image: luciaValidacao,
        },

        {
          badge: "VALIDAÇÃO",
          title: "Menos fricção",
          text: "Os testes mostraram que a divisão em etapas curtas tornou o cadastro mais simples, compreensível e confortável para os usuários.",
          image: telaQuestionario,
        },
      ],

      tradeOff:
        "Adaptamos a forma de coletar os dados necessários para gerar recomendações relevantes sem comprometer a experiência logo no primeiro contato com o produto.",
    },

    prototypeScreens: {
      title: "Protótipo da solução",
      screens: getCaseScreens("case-personatour"),
    },

    impactResults: {
      tagTitle: "Impacto & Aprendizado",
      title: "Turismo centrado em todas as pessoas",
      description:
        "O Persona Tour demonstrou como design inclusivo e sistemas de recomendação podem tornar o planejamento turístico mais acessível para pessoas idosas e com deficiência.",

      bulletPoints: [
        "Informações colaborativas sobre acessibilidade e mobilidade dos locais",
        "Redução de 44 para 15 perguntas no cadastro inicial",
        "Recomendações alinhadas ao perfil e às necessidades do usuário",
        "Interface simplificada para baixa familiaridade digital",
      ],

      learning: {
        quote:
          "Design inclusivo é criar soluções simples o suficiente para que qualquer pessoa tenha autonomia.",
        description:
          "Mais do que calibrar um sistema de recomendação, o grande aprendizado foi entender os receios e limitações do público. Equilibrar a coleta de dados com a clareza das informações de acessibilidade foi o que tornou o produto verdadeiramente viável e humano.",
      },
    },
  },
};
