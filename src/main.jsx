import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./styles/fonts.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { customTheme } from "./theme.js";
const queryClient = new QueryClient();
const BASE_URL = "http://127.0.0.1:8000";
const landingId = 1;
function Main() {
  const [theme2, setTheme2] = useState(null);

  useEffect(() => {
    const fetchTheme = async () => {
      const res = await fetch(`${BASE_URL}/api/landing-pages/${landingId}/`);
      const data = await res.json();
      const palette = data.color_palettes[0];

      const newTheme = customTheme(palette);
      setTheme2(newTheme);
    };

    fetchTheme();
  }, []);

  if (!theme2) return <div>Loading...</div>;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme2}>
        <CssBaseline />
        <StrictMode>
          <App landingId={landingId} />
        </StrictMode>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
