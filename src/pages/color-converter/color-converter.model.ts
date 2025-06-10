export type ColorFormat = "RGB" | "HEX" | "HSL" | "CMYK";

export type ColorConversion = {
  type: ColorFormat;
  value: string;
};

export type ColorData = {
  colorConversions: ColorConversion[];
  colorHarmonies: string[];
};

export type ColorDataArray = ColorData;

export const createColorDataArrayEmpty = (): ColorData => ({
  colorConversions: [],
  colorHarmonies: [],
});
// errors

export interface FormResults {
  color: string;
}

export const createResultsFormEmpty = (): FormResults => ({
  color: "",
});

export interface FormResultsErrors {
  color: string;
}

export const createEmptyResultsFormErrors = (): FormResultsErrors => ({
  color: "",
});
