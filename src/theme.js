import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
  type: "light",
  palette: {
    primary: {
      main: "#DA0037",
    },
    secondary: {
      main: "#FF616D",
      dark: "#66DE93",
    },
    error: {
      main: "#FF4D4D",
    },
    text: {
      primary: "#DA0037",
      secondary: "#FF616D",
    },
    background: {
      default: "#FFEAC9",
      paper: "#FFEAC9",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

const darkTheme = {
  type: "dark",
  palette: {
    primary: {
      main: "#FFF338",
    },
    secondary: {
      main: "#41506B",
      dark: "#242C3D",
    },
    error: {
      main: "#FF4D4D",
    },
    text: {
      primary: "#FFF338",
      secondary: "#FFEEDB",
    },
    background: {
      default: "#121823",
      paper: "#121823",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
};

export { lightTheme, darkTheme, createMuiTheme, ThemeProvider };
