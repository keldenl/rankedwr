import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, yellow } from '@mui/material/colors';

import App from './App';
import './index.css';

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[500],
    },
    secondary: {
      main: yellow[600],
    },
    background: {
      default: "#15222e"
    },
    footer: {
      default: "#0f1923"
    }
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

