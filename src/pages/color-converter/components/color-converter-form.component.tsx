import classes from "./color-converter-form.component.module.css";
import { useState } from "react";
import {
  createEmptyResultsFormErrors,
  createResultsFormEmpty,
  FormResults,
  FormResultsErrors,
} from "../color-converter.model";
import { validateForm } from "../validations/form.validation";
import { ColorConverterHeader } from "./color-converter.header.component";

interface props {
  onResults: (formResults: FormResults) => void;
  loading: boolean;
}
export const ColorConverterForm = (props: props) => {
  const { onResults, loading } = props;
  const [results, setResults] = useState<FormResults>(createResultsFormEmpty());
  const [errors, setErrors] = useState<FormResultsErrors>(
    createEmptyResultsFormErrors()
  );
  const [colorValue, setColorValue] = useState("");

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setColorValue(value);
    setResults({ ...results, [name]: value });
    const validationResult = validateForm({ ...results, [name]: value });
    setErrors(validationResult.errors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validations = validateForm(results);
    setErrors(validations.errors);
    if (validations.succeeded) {
      onResults(results);
    }
  };

  return (
    <section className={classes.container}>
      <ColorConverterHeader />

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <label>Color:</label>
          <input
            className={classes.input}
            name="color"
            value={results.color}
            type="text"
            autoComplete="off"
            onChange={(e) => handleFieldChange(e)}
            placeholder="#F91F1F"
          />
          <div
            className={classes.divColor}
            style={{
              backgroundColor: colorValue,
            }}
          ></div>
        </div>
        <p className={classes.error}>{errors.color}</p>
        <button
          className="button-styles-general"
          disabled={loading}
          type="submit"
        >
          {loading ? "Esperando respuesta..." : "✨Convertir"}
        </button>
      </form>
    </section>
  );
};
