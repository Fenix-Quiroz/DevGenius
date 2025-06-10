import { FieldValidationResult } from "./validation.model";

export const buildValidationFailedResult = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSucceededResult = (): FieldValidationResult => ({
  succeeded: true,
});