import { ColorDataArray } from "./api.model";
export const fetchData = async (color: string): Promise<ColorDataArray> => {
  try {
    const res = await fetch("../../../../netlify/functions/color-converter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ color }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Error calling color converter");
    }

    return data as ColorDataArray;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Error");
  }
};
