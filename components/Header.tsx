import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { createUseStyles } from "react-jss";
import { myTheme, MyTheme } from "../styles/myTheme";
import { LineUmb } from "./common/LineUmb";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const useStyles = createUseStyles((theme: MyTheme) => ({
  wrap: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10000,
  },
  header: {
    background: theme.mainColor,
    height: 100,
    width: "100vw",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  umb: {
    height: "140%",
    position: "absolute",
    left: 10,
    bottom: "50%",
    transform: "translateY(50%)",
    opacity: 0.5,
  },
  name: {
    position: "absolute",
    left: 10,
    bottom: "10%",
    fontSize: 28,
    fontFamily: "adobe-garamond-pro, serif",
    fontWeight: 400,
    fontStyle: "normal",
  },
  portfolio: {
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "adobe-garamond-pro, serif",
    fontWeight: 400,
  },
  locale: {
    position: "absolute",
    right: 10,
    bottom: "10%",
  },
  locale__link: {
    color: "white",
  },
}));

export const Header: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={classes.wrap}>
      <header className={classes.header}>
        <LineUmb className={classes.umb} />
        <div className={classes.name}>
          Hiroki Kobayashi
          <br />
          <span className={classes.portfolio}>Research Portfolio</span>
        </div>
        {/* <div className={classes.locale}>
          switch to{" "}
          <Link href="/" locale={router.locale === "ja" ? "en" : "ja"}>
            <a className={classes.locale__link}>
              {router.locale === "ja" ? "English" : "日本語"}
            </a>
          </Link>
        </div> */}
      </header>
    </div>
  );
};
