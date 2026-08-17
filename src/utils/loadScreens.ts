// 1. Mapeia antecipadamente todas as telas de qualquer subpasta de case
const allPrototypeModules = import.meta.glob(
  "../assets/imgs/**/prototype_screens/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

/**
 * Retorna as URLs das telas de protótipo de um case específico ordenadas numericamente (1, 2, 3... 26).
 * @param caseFolderName Nome da pasta do case (ex: "case-bilroarte", "case-personatour")
 */
export function getCaseScreens(caseFolderName: string): string[] {
  return Object.entries(allPrototypeModules)
    // Filtra apenas as imagens pertencentes ao case solicitado
    .filter(([path]) => path.includes(`/${caseFolderName}/prototype_screens/`))
    // Ordena numericamente pelo nome do arquivo (ex: 1, 2, 10 em vez de 1, 10, 2)
    .sort(([pathA], [pathB]) => {
      const numA = parseInt(pathA.match(/(\d+)\.[^.]+$/)?.[1] || "0", 10);
      const numB = parseInt(pathB.match(/(\d+)\.[^.]+$/)?.[1] || "0", 10);
      return numA - numB;
    })
    .map(([, src]) => src as string);
}