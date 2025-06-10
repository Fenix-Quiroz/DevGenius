export interface Tool {
  id: number;
  name: string;
  description: string;
  icon: string;
  path: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "Generar Nombre de Variable",
    description:
      "Genera nombres coherentes y con significado para tus clases y variables.",
    icon: "💡",
    path: "/generateVariableName",
  },
  {
    id: 2,
    name: "Convertidor de Colores",
    description: "Convierte colores de diferentes formatos",
    icon: "🎨",
    path: "/colorConverter",
  },

  {
    id: 3,
    name: "Explicador de código",
    description:
      "Obtenga explicaciones sencillas de segmentos de código complejos.",
    icon: "🧾",
    path: "/explainCode",
  },
];
