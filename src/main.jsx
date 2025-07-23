import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/fonts.css';
import theme from "./js/theme.js";
import {CssBaseline, ThemeProvider} from "@mui/material";



createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <StrictMode>
            <App />
        </StrictMode>,
    </ThemeProvider>
)
