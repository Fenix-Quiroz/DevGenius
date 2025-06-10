import classes from "./color-converter.header.component.module.css";
export const ColorConverterHeader = () => {
  return (
    <header className={classes.header}>
      <h2>Convertir Colores</h2>
      <p>
        Pega o escribe un color, ya sea en formato hexadecimal, RGB, HSL o CMYK.
        También puedes usar colores básicos en inglés (red, blue, green...).
      </p>
    </header>
  );
};
