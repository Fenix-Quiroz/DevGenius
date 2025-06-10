import {
  isStringValueInformed,
  isValueLongerThan20Chars,
  isValueNotNumber,
} from "@/common/validations";
import {
  buildValidationFailedResult,
  buildValidationSucceededResult,
} from "@/common/validations/plain-validation.helper";
import { FieldValidationResult } from "@/common/validations/validation.model";
import {
  CANNOT_BE_A_NUMBER,
  REQUIRED_FIELD_MESSAGE,
  VALUE_SHOULD_BE_LONGER_THAN_MIN_CHARS,
} from "@/common/validations/validations.const";

export const validateIdentificator = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationSucceededResult();
};

export const validateLanguage = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationSucceededResult();
};

export const validateNomenclature = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationSucceededResult();
};

export const validateDescription = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }
  if (isValueNotNumber(value)) {
    return buildValidationFailedResult(CANNOT_BE_A_NUMBER);
  }
  if (!isValueLongerThan20Chars(value)) {
    return buildValidationFailedResult(VALUE_SHOULD_BE_LONGER_THAN_MIN_CHARS);
  }
  return buildValidationSucceededResult();
};
