import classes from "./explain-code.header.component.module.css";
export const ExplainCodeHeader = () => {
  return (
    <header className={classes.header}>
      <h2>Explicar Código</h2>
      <p>
        ¿No entiendes qué hace ese fragmento de código? Pega cualquier función,
        clase o bloque de código, y deja que la IA te lo explique de forma clara
        y sencilla.
      </p>
    </header>
  );
};
