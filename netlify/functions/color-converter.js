import { GoogleGenAI } from "@google/genai";

export default async (req) => {
  // Solo permitir POST (buena práctica)
  if (req.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(req.body || "{}");
    const color = body?.color;

    if (!color || typeof color !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Color is required" }),
      };
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Dado el color ${color}, devuélveme exactamente este JSON sin explicaciones ni comentarios:

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
- No expliques nada. Solo el JSON limpio.`,
    });

    const text = response.text;

    if (!text) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "No response from AI" }),
      };
    }

    // Limpieza por si Gemini mete fences
    const cleaned = text
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    let data;
    try {
      data = JSON.parse(cleaned);
    } catch (e) {
      // Si falla, devolvemos el texto para debug (pero con cuidado)
      return {
        statusCode: 502,
        body: JSON.stringify({
          error: "Invalid JSON returned by AI",
          raw: cleaned.slice(0, 2000), // no mandes infinito
        }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Color converter function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
