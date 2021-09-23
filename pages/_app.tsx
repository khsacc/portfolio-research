import { SheetsRegistry } from "react-jss";

function MyApp({ Component, pageProps }) {
  const sheets = new SheetsRegistry();
  return (
    <>
      <Component {...pageProps} />
      <style type="text/css" id="server-side-styles">
        ${sheets.toString()}
      </style>
    </>
  );
}

export default MyApp;
