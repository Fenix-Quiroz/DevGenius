export interface FormResults {
  identificator: string;
  language: string;
  nomenclature: string;
  description: string;
}

export const createResultsFormEmpty = (): FormResults => ({
  identificator: "",
  language: "",
  nomenclature: "",
  description: "",
});

export interface FormResultsErrors {
    identificator: string;
    language: string;
    nomenclature: string;
    description: string;
}

 export const createEmptyResultsFormErrors = (): FormResultsErrors => ({
  identificator: "",
  language: "",
  nomenclature: "",
  description: "",
});
