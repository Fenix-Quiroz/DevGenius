import { tools } from "@/data";
import { HomePageCard } from "./components";
import { AppLayout } from "@/layout";
import classes from "./home-page.module.css";

export const HomePage = () => {
  return (
    <AppLayout>
      <div className={classes.homePage}>
        {tools.map((tool, index) => {
          return (
            <section key={index}>
              <HomePageCard tool={tool} />
            </section>
          );
        })}
      </div>
    </AppLayout>
  );
};
