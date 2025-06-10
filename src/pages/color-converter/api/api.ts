import { GoogleGenAI } from "@google/genai";
import { ColorDataArray } from "./api.model";
//import { ColorDataArray } from "../color-converter.model";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_CLIENT_ID });
export const fetchData = async (color: string): Promise<ColorDataArray> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Dado el color  ${color}, devuélveme exactamente este JSON sin explicaciones ni comentarios:

{
  "colorConversions": [
    { "type": "RGB", "value": "rgb(255, 0, 0)" },
    { "type": "HEX", "value": "#FF0000" },
    { "type": "HSL", "value": "hsl(0, 100%, 50%)" },
    { "type": "CMYK", "value": "cmyk(0%, 100%, 100%, 0%)" }
  ],
  "colorHarmonies": [
    "#FF6666",
    "#FF0000",
    "#990000",
    "#FF3333",
    "#CC0000",
    "#FF9999"
  ]
}

- El formato debe ser exacto: RGB como "rgb(...)", HEX con "#", HSL como "hsl(...)", y CMYK como "cmyk(...)".
- Todos los valores deben ser correctos según el color proporcionado.
- No devuelvas nada fuera del JSON.
- No incluyas etiquetas como \`\`\`json ni \`\`\`.
- No expliques nada. Solo el JSON limpio.
`,
    });

    const text = response.text;
    if (text) {
      const cleaned = text
        .trim()
        .replace(/^```(json)?/, "")
        .replace(/```$/, "");
      const data: ColorDataArray = JSON.parse(cleaned);
      return data;
    } else {
      throw new Error("No data");
    }
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Error");
  }
};
