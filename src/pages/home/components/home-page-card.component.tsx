import { Tool } from "@/data";
import { Link } from "react-router-dom";
import classes from "./home-page-card.component.module.css";
interface Props {
  tool: Tool;
}

export const HomePageCard = (props: Props) => {
  const { tool } = props;
  return (
    <div className={classes.card}>
      <div>
        <span>{tool.icon}</span>
        <h1>{tool.name}</h1>
      </div>
      <p>{tool.description}</p>
      <Link className={classes.buttom} to={tool.path}>
        Probar
      </Link>
    </div>
  );
};
