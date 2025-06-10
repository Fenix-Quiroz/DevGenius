import { ResultsEmptyIcon } from "../icons";
import classes from "./ui-results-empty.module.css";
interface Props {
  description: string;
}
export const UiResultsEmpty = (props: Props) => {
  const { description } = props;
  return (
    <div className={classes.resultsEmpty}>
      <div>
        <span>
          <ResultsEmptyIcon />
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};
