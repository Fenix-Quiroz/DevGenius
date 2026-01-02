import { GoogleGenAI } from "@google/genai";

export default async (req) => {
  try {
    const { prompt } = JSON.parse(req.body || "{}");

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Prompt is required" }),
      };
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    // Dependiendo de la versión del SDK puede variar,
    // así que tomamos lo más común:
    const text =
      result?.text ||
      result?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ||
      "";

    return {
      statusCode: 200,
      body: JSON.stringify({ text }),
    };
  } catch (err) {
    console.error("Gemini function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal error" }),
    };
  }
};
