import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { createEmotionCache, customTheme } from "../../common/theme";

// Import Global Style Files
import "../styles/globals.css";
import "../styles/dashboard.component.css"

const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
      {/* <ThemeProvider theme={customTheme}> */}
        <CssBaseline />
            <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </CacheProvider>
  )
}
