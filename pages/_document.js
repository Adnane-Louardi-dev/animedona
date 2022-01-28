import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Nunito+Sans&family=Open+Sans&family=Oxygen&family=PT+Sans&display=swap"
          rel="stylesheet"
        />
        <meta name="Animedona best animes themes, with AnimEdona you can play millions of songs and the soundtrack from all of animes you love" />
        <link rel="apple-touch-icon" href="/animedona-logo.png" />
        <meta name="theme-color" content="#240a66" />
        <meta name="msapplication-TileColor" content="#240a66" />
        <meta name="msapplication-navbutton-color" content="#240a66" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#240a66" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
