import { FormResults, FormResultsErrors } from "../explain-code.model";
import {
  validateValueDescription,
  validateValueLanguage,
} from "./field-validation";
import { FormValidationResult } from "@/common/validations/validation.model";

export const validateForm = (
  formResults: FormResults
): FormValidationResult<FormResultsErrors> => {
  const fieldValidationResults = [
    validateValueLanguage(formResults.language),
    validateValueDescription(formResults.description),
  ];
  return {
    succeeded: fieldValidationResults.every((result) => result.succeeded),
    errors: {
      language: fieldValidationResults[0].errorMessage ?? "",
      description: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
