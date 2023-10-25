import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";

const isBrowser = typeof document !== "undefined";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#3857ff",
    },
    error: {
      main: "#EC1E30",
    },
    text: {
      primary: "#2c2c2c",
      secondary: "#666666",
      turnary: "#1a1a1a",
      quad: "#000000",
      grey: "#999999",
    },
    action: {
      selectedOpacity: 0.12,
      disabled: "rgba(56, 87, 255, 0.5)",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ["Manrope-Regular"],
    button: {
      fontSize: "1rem",
      lineHeight: "1.25rem",
      textTransform: "capitalize",
      fontFamily: "Manrope-Medium",
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: "1.43rem",
      fontFamily: "Manrope-Regular",
      color: "#2c2c2c",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.43rem",
      fontFamily: "Manrope-Regular",
      color: "#8b8b8b",
    },
    body3: {
      fontSize: "0.875rem",
      lineHeight: "1.43rem",
      fontFamily: "Manrope-Medium",
      color: "#666666",
    },
    h2: {
      fontFamily: "Manrope-Bold",
      fontSize: "2.75rem",
      lineHeight: "3.75rem",
      marginBottom: "0.55rem",
      color: "#2c2c2c",
      letterSpacing: "0.2px",
    },
    h3: {
      fontFamily: "Manrope-Bold",
      fontSize: "1.65rem",
      LineHeight: "2rem",
      color: "#2c2c2c",
      marginBottom: "0.6875rem",
    },
    h4: {
      fontFamily: "Manrope-Bold",
      fontSize: "1.375rem",
      lineHeight: "2rem",
      color: "#2c2c2c",
    },
    h5: {
      fontFamily: "Manrope-SemiBold",
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      color: "#2c2c2c",
      marginBottom: "1.25rem",
    },
    h6: {
      fontFamily: "Manrope-Medium",
      fontSize: "0.875rem",
      LineHeight: "1.43rem",
      color: "#2c2c2c",
      marginBottom: "0.8125rem",
    },
    h1: {
      fontFamily: "Manrope-Bold",
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      color: "#000000",
      marginBottom: "0.875rem",
    },
    subtitle1: {
      fontFamily: "Manrope-Medium",
      fontSize: "1.125rem",
      lineHeight: "1.875rem",
      color: "#6f6f6f",
    },
    subtitle2: {
      fontFamily: "Manrope-Medium",
      fontSize: "1rem",
      lineHeight: "1.625rem",
      color: "#666666",
    },
    subtitle3: {
      fontFamily: "Manrope-SemiBold",
      fontSize: "1.0625rem",
      lineHeight: "1.6875rem",
      color: "#000000",
    },
    inherit: {
      fontFamily: "Manrope-Medium",
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
      color: "#8b8b8b",
    },
    inherit2: {
      fontFamily: "Manrope-Medium",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      color: "#8b8b8b",
    },
    dataLabel: {
      fontFamily: "Manrope-Medium",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      color: "#505050",
    },
    dataInput: {
      margin: "0px",
      fontFamily: "Manrope-Medium",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      color: "#1a1a1a",
    },
    listName: {
      fontFamily: "Manrope-SemiBold",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      color: "#000000",
    },
    helpText: {
      fontFamily: "Manrope-Medium",
      fontSize: "1rem",
      lineHeight: "1.625rem",
      color: "#000000",
    },
    subtitle3: {
      fontFamily: "Manrope-SemiBold",
      fontSize: "1.0625rem",
      lineHeight: "1.6875rem",
      color: "#000000",
    },
    cardTitle: {
      fontFamily: "Manrope-Bold",
      fontSize: "1.0625rem",
      lineHeight: "1.6875rem",
      color: "#000000",
    },
    checklist: {
      fontFamily: "Manrope-Medium",
      fontSize: "0.8125rem",
      lineHeight: "1.1875rem",
      color: "#505050",
    },
    highlightTitle: {
      color: "#ff0049",
      fontFamily: "Manrope-Bold",
      fontSize: "0.9375rem",
      lineHeight: "1.0625rem",
    },
    h7: {
      fontFamily: "Manrope-Bold",
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      color: "#1a1a1a",
    },
    checklist2: {
      fontFamily: "Manrope-Medium",
      fontSize: "1.0625rem",
      lineHeight: "1.5625rem",
      color: "#505050",
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "p",
          subtitle2: "p",
          body1: "p",
          body2: "p",
          inherit: "P",
        },
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 40,
        },
      },
    },
  },
});

/**
 *
 * Function to initialize the EmotionCache Required by MUI
 *
 * @returns
 */
export const createEmotionCache = () => {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector('meta[name="emotion-content"]');
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
};
