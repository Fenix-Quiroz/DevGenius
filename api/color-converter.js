import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { color } = req.body;

    if (!color || typeof color !== "string") {
      return res.status(400).json({ error: "Color is required" });
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing API key" });
    }

    const ai = new GoogleGenAI({ apiKey });

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

- No devuelvas nada fuera del JSON.
- No expliques nada. Solo el JSON limpio.`,
    });

    const text = response.text?.trim() || "";

    const cleaned = text
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    const data = JSON.parse(cleaned);

    return res.status(200).json(data);
  } catch (err) {
    console.error("Color converter error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
