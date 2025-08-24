import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import App from "./App.jsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Main = () => {
  const baseTheme = createTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <StrictMode>
          <App />
        </StrictMode>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Main;

// render
createRoot(document.getElementById("root")).render(<Main />);
