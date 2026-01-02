import { GoogleGenAI } from "@google/genai";

export default async (req) => {
  try {
    // req es un Request (Web API) en runtime nuevo
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { color } = await req.json();

    if (!color || typeof color !== "string") {
      return new Response(JSON.stringify({ error: "Color is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing GOOGLE_GENERATIVE_AI_API_KEY" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
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

    const text = response?.text;

    if (!text) {
      return new Response(JSON.stringify({ error: "No response text from AI" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const cleaned = text
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    let data;
    try {
      data = JSON.parse(cleaned);
    } catch {
      return new Response(
        JSON.stringify({
          error: "Invalid JSON returned by AI",
          raw: cleaned.slice(0, 2000),
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("color-converter error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
