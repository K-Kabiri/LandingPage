import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#6A49F2',
        },
        primary: {
            main: '#6A49F2',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'IRANYekan',
        fontSize: 14,
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
