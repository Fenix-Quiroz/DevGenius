import { UiSelectOptions, UiTextarea } from "@/components";
import classes from "./explain-code-form.component.module.css";
import { LANGUAGES } from "../const";
import {
  createEmptyResultsFormErrors,
  createResultsFormEmpty,
  FormResults,
  FormResultsErrors,
} from "../explain-code.model";
import { useState } from "react";
import { validateForm } from "../validations";
import { ExplainCodeHeader } from "./explain-code.header.component";

interface Props {
  onResults: (formResults: FormResults) => void;
  loading: boolean;
}
export const ExplainCodeForm = (props: Props) => {
  const { onResults, loading } = props;
  const [errors, setErrors] = useState<FormResultsErrors>(
    createEmptyResultsFormErrors()
  );
  const [results, setResults] = useState<FormResults>(createResultsFormEmpty());
  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setResults({ ...results, [name]: value });
    const validationResult = validateForm({ ...results, [name]: value });
    setErrors(validationResult.errors);
  };
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(results);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onResults(results);
    }
  };

  return (
    <section className={classes.formContainer}>
      <ExplainCodeHeader />
      <form className={classes.form} onSubmit={handlerSubmit}>
        <UiSelectOptions
          id="language"
          label="Lenguaje"
          name="language"
          defaultValue="Selecione un lenguaje"
          options={LANGUAGES}
          onChange={handleFieldChange}
          value={results.language}
        />
        <p className={classes.error}>{errors.language}</p>
        <UiTextarea
          id="description"
          label="Pega el código que deseas que se  explique"
          name="description"
          placeholder="// Pega el código que deseas que se explique"
          hanldleFieldChange={handleFieldChange}
          value={results.description}
        />
        <p className={classes.error}>{errors.description}</p>
        <button
          disabled={loading}
          className={`${classes.button} ${"button-styles-general"}`}
        >
          {loading ? "Esperando respuesta..." : "✨ Explicar"}
        </button>
      </form>
    </section>
  );
};
