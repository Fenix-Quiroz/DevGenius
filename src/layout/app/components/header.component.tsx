import { Logo as Logo } from "@/components";
import { routes } from "@/core";
import { Link } from "react-router-dom";
import classes from "./header.component.module.css";

export const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <Link to={routes.home}>
          <h1>DevGenius</h1>
          <Logo />
        </Link>
      </div>
      <p>Utilidades inteligentes para desarrolladores modernos</p>
    </div>
  );
};
