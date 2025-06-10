import { UiResultsEmpty } from "@/components";
import { CodeBlock } from "./code-block.component";
import classes from "./explain-code-results.component.module.css";

interface Props {
  results: string;
}
export const ExplainCodeResults = (props: Props) => {
  const { results } = props;
  return (
    <section className={classes.resultsContainer}>
      {results ? (
        <CodeBlock code={results} />
      ) : (
        <UiResultsEmpty description="Completa el formulario y haz click en 'Explicar'" />
      )}
    </section>
  );
};
