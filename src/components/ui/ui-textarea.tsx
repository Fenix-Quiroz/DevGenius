import classes from "./ui-textarea.module.css";
interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  hanldleFieldChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const UiTextarea = (props: Props) => {
  const { hanldleFieldChange, id, label, name,  placeholder } = props;
  return (
    <div className={classes.formItem}>
      <label>{label}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={hanldleFieldChange}
        rows={5}
      ></textarea>
    </div>
  );
};
