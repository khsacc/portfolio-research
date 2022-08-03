import "../styles/globals.scss";
import { createUseStyles, SheetsRegistry, ThemeProvider } from "react-jss";
import { Header } from "../components/Header";
import { MyTheme, myTheme } from "../styles/myTheme";
import { adobeFontsLoader } from "../lib/adobeFonts";
import { useEffect, useState } from "react";
// import { appWithTranslation, useTranslation } from "../lib/i18n";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { SEO } from "../components/common/seo";

const useStyles = createUseStyles((theme: MyTheme) => ({
  container: {
    padding: 16,
    marginTop: 100,
  },
}));

function MyApp({ Component, pageProps }) {
  const [BASE_PATH, setBASE_PATH] = useState("");
  const sheets = new SheetsRegistry();
  useEffect(() => {
    if (process.browser) {
      adobeFontsLoader(document);
      setBASE_PATH(window.location.origin);
    }
  }, []);
  const classes = useStyles();

  return (
    <>
      <SEO BASE_PATH={BASE_PATH} />
      <ThemeProvider theme={myTheme}>
        <Header />
        <div className={classes.container}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      <style type="text/css" id="server-side-styles">
        ${sheets.toString()}
      </style>
    </>
  );
}

// export default MyApp;
export default appWithTranslation(MyApp);
