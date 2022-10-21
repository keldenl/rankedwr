import Head from "next/head";
import '../styles/global.css'

// Pages
import '../styles/index.css'
import '../styles/Home.css'
import '../styles/FullTierList.css'
import '../styles/Champions.css'
import '../styles/ChampionDetails.css'

// Components
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/Card.css'

import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import { blue, yellow } from '@mui/material/colors';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


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

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </div>
    )
}