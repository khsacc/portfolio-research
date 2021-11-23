import "../styles/globals.scss";
import { createUseStyles, SheetsRegistry, ThemeProvider } from "react-jss";
import { Header } from "../components/Header";
import { MyTheme, myTheme } from "../styles/myTheme";
import { adobeFontsLoader } from "../lib/adobeFonts";
import { useEffect, useState } from "react";
// import { appWithTranslation, useTranslation } from "../lib/i18n";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

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
      <Head>
        <meta
          name="msapplication-square70x70logo"
          content={`${BASE_PATH}/meta/site-tile-70x70.png`}
        />
        <meta
          name="msapplication-square150x150logo"
          content={`${BASE_PATH}/meta/site-tile-150x150.png`}
        />
        <meta
          name="msapplication-wide310x150logo"
          content={`${BASE_PATH}/meta/site-tile-310x150.png`}
        />
        <meta
          name="msapplication-square310x310logo"
          content={`${BASE_PATH}/meta/site-tile-310x310.png`}
        />
        <meta name="msapplication-TileColor" content="#0078d7" />
        <link
          rel="shortcut icon"
          type="image/vnd.microsoft.icon"
          href={`${BASE_PATH}/meta/favicon.ico`}
        />
        <link
          rel="icon"
          type="image/vnd.microsoft.icon"
          href={`${BASE_PATH}/meta/favicon.ico`}
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${BASE_PATH}/meta/apple-touch-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${BASE_PATH}/meta/apple-touch-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${BASE_PATH}/meta/apple-touch-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${BASE_PATH}/meta/apple-touch-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${BASE_PATH}/meta/apple-touch-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${BASE_PATH}/meta/apple-touch-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${BASE_PATH}/meta/apple-touch-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${BASE_PATH}/meta/apple-touch-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${BASE_PATH}/meta/apple-touch-icon-180x180.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href={`${BASE_PATH}/meta/android-chrome-36x36.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href={`${BASE_PATH}/meta/android-chrome-48x48.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href={`${BASE_PATH}/meta/android-chrome-72x72.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${BASE_PATH}/meta/android-chrome-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href={`${BASE_PATH}/meta/android-chrome-128x128.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href={`${BASE_PATH}/meta/android-chrome-144x144.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="152x152"
          href={`${BASE_PATH}/meta/android-chrome-152x152.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${BASE_PATH}/meta/android-chrome-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href={`${BASE_PATH}/meta/android-chrome-256x256.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href={`${BASE_PATH}/meta/android-chrome-384x384.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={`${BASE_PATH}/meta/android-chrome-512x512.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href={`${BASE_PATH}/meta/icon-36x36.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href={`${BASE_PATH}/meta/icon-48x48.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href={`${BASE_PATH}/meta/icon-72x72.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${BASE_PATH}/meta/icon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href={`${BASE_PATH}/meta/icon-128x128.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href={`${BASE_PATH}/meta/icon-144x144.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="152x152"
          href={`${BASE_PATH}/meta/icon-152x152.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="160x160"
          href={`${BASE_PATH}/meta/icon-160x160.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${BASE_PATH}/meta/icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href={`${BASE_PATH}/meta/icon-196x196.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href={`${BASE_PATH}/meta/icon-256x256.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href={`${BASE_PATH}/meta/icon-384x384.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={`${BASE_PATH}/meta/icon-512x512.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${BASE_PATH}/meta/icon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="24x24"
          href={`${BASE_PATH}/meta/icon-24x24.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${BASE_PATH}/meta/icon-32x32.png`}
        />
      </Head>
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
