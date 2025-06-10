import { UiSelectOptions, UiTextarea } from "@/components";
import {
  IDENTIFICADORES,
  NOMENCLATURA_DE_VARIABLES,
  TIPOS_DE_LENGUAJES,
} from "../const";
import classes from "./generate-variable-name-form.component.module.css";
import {
  createEmptyResultsFormErrors,
  createResultsFormEmpty,
  FormResults,
  FormResultsErrors,
} from "../generate-variable-name.model";
import { useState } from "react";
import { validateForm } from "../validations/form.validations";

interface Props {
  onResultsFormSubmit: (formResults: FormResults) => void;
  loading: boolean;
}
//TODO: hacer un hook para manejar el estado del formulario

export const GenerateVariableNameForm = (props: Props) => {
  const { onResultsFormSubmit, loading } = props;
  const [errors, setErrors] = useState<FormResultsErrors>(
    createEmptyResultsFormErrors()
  );
  const [formResults, setFormResults] = useState<FormResults>(
    createResultsFormEmpty()
  );
  const handleFieldChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormResults({
      ...formResults,
      [name]: value,
    });

    const validation = validateForm({ ...formResults, [name]: value });
    setErrors(validation.errors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValidatonResult = validateForm(formResults);
    setErrors(formValidatonResult.errors);
    if (formValidatonResult.succeeded) {
      onResultsFormSubmit(formResults);
    }
  };
  return (
    <div className={classes.formContainer}>
        <h2>¿Qué quieres nombrar?</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <UiSelectOptions
          id="identificator"
          label="Tipo de identificador"
          name="identificator"
          defaultValue="Selecione un identificador"
          onChange={handleFieldChange}
          value={formResults.identificator}
          options={IDENTIFICADORES}
        />
        <p className={classes.error}>{errors.identificator}</p>
        <UiSelectOptions
          id="language"
          label="Tipo de lenguaje"
          name="language"
          defaultValue="Selecione un lenguaje"
          value={formResults.language}
          options={TIPOS_DE_LENGUAJES}
          onChange={handleFieldChange}
        />
        <p className={classes.error}>{errors.language}</p>
        <UiSelectOptions
          id="nomenclatura"
          label="Estilo de nomenclatura"
          name="nomenclature"
          value={formResults.nomenclature}
          defaultValue="Selecione un tipo de nomenclatura"
          options={NOMENCLATURA_DE_VARIABLES}
          onChange={handleFieldChange}
        />
        <p className={classes.error}>{errors.nomenclature}</p>
        <UiTextarea
          id="descdescriptionripcion"
          label="Describe para qué es esta variable"
          name="description"
          value={formResults.description}
          placeholder="Ejemplo: 'Almacenar el nombre de usuario'"
          hanldleFieldChange={handleFieldChange}
        />
        <p className={classes.error}>{errors.description}</p>
        <button
          disabled={loading}
          className={`${classes.button} ${"button-styles-general"}`}
        >
          {" "}
          {loading ? "Esperando respuesta..." : "🪄 Generar Nombres"}
        </button>
      </form>
    </div>
  );
};
