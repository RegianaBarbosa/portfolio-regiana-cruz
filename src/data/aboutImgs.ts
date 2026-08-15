import fotoTeste from "../assets/imgs/about-oficina.jpg";
import fotoLivraria from "../assets/imgs/about-livraria.jpg";
import fotoLondres from "../assets/imgs/about-londres.jpg";
import fotoApresentacaoJinf from "../assets/imgs/about-jinf.jpg";
import fotoWorkshopMercado from "../assets/imgs/about-workshopMercado.jpg";

export interface AboutImageItem {
  id: number;
  src: string;
  alt: string;
  className: string;
}

export const aboutImgsData: AboutImageItem[] = [
  {
    id: 1,
    src: fotoTeste,
    alt: "Regiana analisando materiais do teste de usabilidade",
    className: "w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 top-0 left-[20%] z-10",
  },
  {
    id: 2,
    src: fotoLivraria,
    alt: "Regiana lendo na livraria",
    className: "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 top-[18%] right-[4%] z-20",
  },
  {
    id: 3,
    src: fotoLondres,
    alt: "Regiana em Londres em frente ao Big Ben",
    className: "w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 top-[38%] left-[2%] z-20",
  },
  {
    id: 4,
    src: fotoApresentacaoJinf,
    alt: "Regiana ministrando oficina Antes do Código no JiNF",
    className: "w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 top-[50%] right-[6%] z-10",
  },
  {
    id: 5,
    src: fotoWorkshopMercado,
    alt: "Regiana palestrando no Hackaton do Mercado em São Luís",
    className: "w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 bottom-2 top-[75%] left-[8%] z-20",
  },
];