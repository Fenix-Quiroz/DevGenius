import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export const useApi = () => {
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (prompt: string) => {
    setLoading(true);
    try {
      const response = await ai.models.generateContentStream({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      let result = "";
      for await (const chunk of response) {
        if (typeof chunk.text === "string") {
          result += chunk.text;
        }
      }

      setResults(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, results, loading };
};
