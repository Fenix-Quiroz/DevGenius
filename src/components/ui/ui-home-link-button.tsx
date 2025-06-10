import { routes } from "@/core";
import { Link } from "react-router-dom";
import classes from "./ui-home-link-button.module.css";
export const UiHomeLinkButton = () => {
  return (
    <Link className={classes.previousPageButton} to={routes.home}>
      Volver
    </Link>
  );
};
