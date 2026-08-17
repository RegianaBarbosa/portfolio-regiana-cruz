import toolFigma from "../assets/icons/figma-icon.svg";
import toolReact from "../assets/icons/react-js-icon.svg";
import toolTailwind from "../assets/icons/tailwind-css-icon.svg";
import toolNext from "../assets/icons//nextjs-icon.svg";
import toolHtml from "../assets/icons/html-icon.svg";
import toolCss from "../assets/icons/css-icon.svg";
import toolMiro from "../assets/icons/miro_logo.svg";
import toolJavascript from "../assets/icons/javascript_logo.svg";
import toolTypescript from "../assets/icons/typescript_logo.svg";
import toolTrello from "../assets/icons/trello_logo.svg";
import toolVscode from "../assets/icons/vscode_logo.svg";

export interface ToolItem {
  id?: string;
  src: string;
  alt: string;
}

export const toolsData: ToolItem[] = [
  { src: toolFigma, alt: "Figma logo" },
  { src: toolReact, alt: "React logo" },
  { src: toolTailwind, alt: "Tailwind CSS logo" },
  { src: toolNext, alt: "Next.js logo" },
  { src: toolHtml, alt: "HTML5 logo" },
  { src: toolCss, alt: "CSS3 logo" },
  { src: toolJavascript, alt: "JavaScript logo" },
  { src: toolTypescript, alt: "TypeScript logo" },
  { src: toolVscode, alt: "VSCode logo" },
  { src: toolTrello, alt: "Trello logo" },
  { src: toolMiro, alt: "Miro logo" },
];
