import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
    primary: {
      main: "#5249B4",
      light: "#BAB6E1",
    },
    secondary: {
      main: "#FF8500",
      light: "#FFEBD0",
    },
    text: {
      primary: "#211D48",
      // secondary: "#FFFFFF",
    },
    background: {
      default: "#F8F8FC",
    },
    warning: {
      main: "#FFB400",
    },
    success: {
      main: "#10B981",
    },
    error: {
      main: "#EF4444",
    },
    grey: {
      50: "#F7F7F7",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
    typography: {
        fontFamily: 'IRANYekan',
        fontSize: 16,
        lg: {
            fontSize: '1.25rem',
        },
        xl: {
            fontSize: '1.5rem',
        },
        sm: {
            fontSize: '0.875rem',
        },
    },
});

export default theme;
