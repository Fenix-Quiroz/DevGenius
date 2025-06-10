interface Props {
  colorHarmonies: string[];
}
import classes from "./color-converter-color-harmonies.component.module.css";
export const ColorConverterColorHarmonies = (props: Props) => {
  const { colorHarmonies } = props;
  return (
    <div className={classes.container}>
      <h2>Color Harmonies</h2>
      <ul className={classes.colorHarmonies}>
        {colorHarmonies.map((color, index) => (
          <li key={index}>
            <p
              style={{
                backgroundColor: color,
              }}
            ></p>
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
};
