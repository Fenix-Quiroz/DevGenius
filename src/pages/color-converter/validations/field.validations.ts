import { isStringValueInformed } from "@/common/validations";
import {
  buildValidationFailedResult,
  buildValidationSucceededResult,
} from "@/common/validations/plain-validation.helper";
import { FieldValidationResult } from "@/common/validations/validation.model";
import {
  COLOR_IS_NOT_VALID,
  REQUIRED_FIELD_MESSAGE,
  VALUE_INITIAL_IS_NOT_NUMBER,
} from "@/common/validations/validations.const";
import chroma from "chroma-js";

export const initialValueIsANumber = (value: string): boolean => {
  const isValid = /^[0-9]/.test(value);
  if (isValid) {
    return false;
  }
  return true;
};

export const isValidColor = (color: string): FieldValidationResult => {
  if (!initialValueIsANumber(color)) {
    return buildValidationFailedResult(VALUE_INITIAL_IS_NOT_NUMBER);
  }
  if (!isStringValueInformed(color)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }
  if (!chroma.valid(color)) {
    return buildValidationFailedResult(COLOR_IS_NOT_VALID);
  }
  return buildValidationSucceededResult();
};
