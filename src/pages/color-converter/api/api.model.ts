interface ColorConversion {
  type: "RGB" | "HEX" | "HSL" | "CMYK";
  value: string;
}

interface ColorData {
  colorConversions: ColorConversion[];
  colorHarmonies: string[];
}

export type ColorDataArray = ColorData;

export const createColorDataArrayEmpty = (): ColorData => ({
  colorConversions: [],
  colorHarmonies: [],
});
