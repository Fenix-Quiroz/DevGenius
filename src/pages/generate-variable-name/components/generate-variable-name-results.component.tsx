import { useEffect, useState } from "react";
import classes from "./generate-variable-name-results.component.module.css";
import { ResultsContent } from "./results-content.component";
import { UiResultsEmpty } from "@/components";

interface Props {
  results: string;
}

export const GenerateVariableNameResults = (props: Props) => {
  const { results } = props;
  const [showContent, setShowContent] = useState<boolean>(false);
  useEffect(() => {
    if (results) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }, [results]);

  return (
    <section className={classes.results}>
      <h3>Sugerencias de nombres</h3>
      {showContent ? (
        <ResultsContent datosDesdeApi={results.split("\n").filter(Boolean)} />
      ) : (
        <UiResultsEmpty description="Llena el formulario y haz click en 'Generar Nombres'" />
      )}
    </section>
  );
};
