import classes from "./app-layout.module.css";
import { Footer, Header } from "./components";
type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};
