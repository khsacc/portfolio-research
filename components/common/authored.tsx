import { NextPage } from "next";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  authored: {
    textDecoration: "underline",
  },
}));
export const Authored: NextPage<{ name: string }> = ({ name }) => {
  const classes = useStyles();
  return <span className={classes.authored}>{name}</span>;
};
