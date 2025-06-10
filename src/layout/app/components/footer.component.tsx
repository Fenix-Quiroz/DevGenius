import { Github, Linkedln, Logo } from "@/components";
import classes from "./footer.component.module.css";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <p>DevGenius</p>
        <Logo />
      </div>
      <div className={classes.socials}>
        <a
          title="Github"
          href="https://github.com/Fenix-Quiroz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          title="Linkedln"
          href="https://www.linkedin.com/in/fenix-quiroz-b7b960240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedln />
        </a>
      </div>
    </div>
  );
};
