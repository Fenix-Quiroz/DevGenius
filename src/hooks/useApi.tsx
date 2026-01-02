import { useState } from "react";
export const useApi = () => {
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (prompt: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Error al generar contenido");
      }

      setResults(data.text);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, results, loading };
};
