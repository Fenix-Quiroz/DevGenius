import { UiCopyButton } from "@/components";
import classes from "./results-content.component.module.css";

interface Props {
  datosDesdeApi: string[];
}
export const ResultsContent = (props: Props) => {
    const { datosDesdeApi } = props;

  return (
    <div className={classes.resultsContent}>
      <ul>
        {datosDesdeApi.map((item, index) => (
          <li key={index}>
            {item}
            <UiCopyButton text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
