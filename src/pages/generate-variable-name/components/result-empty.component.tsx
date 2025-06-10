import { ResultsEmptyIcon } from "@/components";
import classes from "./result-empty.component.module.css";
export const ResultEmpty = () => {
  return (
    <div className={classes.resultsEmpty}>
      <span>
        <ResultsEmptyIcon />
      </span>
      <p>
        Completa el formulario y haz clic en "Generar Nombres" para obtener
        sugerencias inteligentes basadas en tu descripción.
      </p>
    </div>
  );
};
