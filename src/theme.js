import { createTheme } from "@mui/material/styles";

export const customTheme = (palette) => {
    return createTheme({
        palette: {
            primary: {
                main: palette?.main_primary_color || "#5249B4",
                light: palette?.light_primary_color || "#ede7f6",
            },
            secondary: {
                main: palette?.main_secondary_color || "#FF8500",
                light: palette?.light_secondary_color || "#FFEBD0",
            },
            text: {
                primary: palette?.text_primary_color || "#211D48",
                // secondary:palette?.text_secondary_color,
            },
            background: {
                default: palette?.background_color || "#F8F8FC",
            },
            warning: { main: palette?.warning_color || "#FFB400" },
            success: { main: palette?.success_color || "#10B981" },
            error: { main: palette?.error_color || "#EF4444" },
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
};

