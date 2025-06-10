export const isStringValueInformed = (field: string): boolean => field !== "";

export const isValueNotNullOrUndefined = <T>(value: T): boolean =>
  value !== undefined && value !== null;

// dar false si es un numero
export const isValueNotNumber = (value: string): boolean =>
  !isNaN(Number(value));

// VERIFCAR QUE EL VALUE TENGO MAS DE 20 CARACTERES
export const isValueLongerThan20Chars = (value: string): boolean =>
  value.length > 15;
