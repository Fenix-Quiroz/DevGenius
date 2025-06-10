export interface FormResults {
  language: string;
  description: string;
}

export const createResultsFormEmpty = (): FormResults => ({
  language: "",
  description: "",
});

export interface FormResultsErrors {
  language: string;
  description: string;
}

export const createEmptyResultsFormErrors = (): FormResultsErrors => ({
  language: "",
  description: "",
});
