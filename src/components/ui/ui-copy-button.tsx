import { useState } from "react";
import { CopyIcon } from "../icons";
import classes from "./ui-copy-button.module.css";
interface Props {
  text: string;
}

export const UiCopyButton = (props: Props) => {
  const { text } = props;
  const [copiado, setCopiado] = useState(false);
  const handlerCoppy = (texto: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 1000);
  };

  return (
    <>
      <span className={classes.copyText}>{copiado ? "Copiado" : ""}</span>
      <span className={classes.copyButton} onClick={() => handlerCoppy(text)}>
        <CopyIcon />
      </span>
    </>
  );
};
