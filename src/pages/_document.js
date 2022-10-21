import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Find top champions for every position with our Official Wild Rift Stats. Using Riot's official ranked stats for solo top, mid, jungle, duo ADC, and support champions updated for China Diamond and above ranked players."
                />
                <meta name="keywords" content="wild rift, official stats, riot, stats, tier list, ranked list, champions, patch, new patch, ranking, rankedwr, league of legends, mobile, jinx from league of legends, wild rift ranked, champions, legendary queue" />

                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <link rel="manifest" href="/site.webmanifest" />
                <title>Wild Rift Tier List Stats - RankedWR</title>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];

                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());

                            gtag('config', 'G-C2S8YQDJBT');
                        `}} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}