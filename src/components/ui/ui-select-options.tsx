import classes from "./ui-select-optons.module.css";
interface UiSelectProps {
  id: string;
  label: string;
  name: string;
  value: string;
  options: string[];
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const UiSelectOptions = (props: UiSelectProps) => {
  const { options, onChange, id, label, name, value } = props;
  return (
    <div className={classes.formItem}>
      <label>{label}</label>
      <select name={name} id={id} onChange={onChange} value={value}>
        <option value="">{props.defaultValue}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
