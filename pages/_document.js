/* eslint-disable @next/next/next-script-for-ga */
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
        <meta
          name="description"
          content="Animedona best animes themes, with AnimEdona you can play millions of songs and the soundtrack from all of animes you love"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K5CMQGM');`,
          }}
        ></script>
        <link rel="apple-touch-icon" href="/animedona-logo.png" />
        <meta name="theme-color" content="#240a66" />
        <meta name="msapplication-TileColor" content="#240a66" />
        <meta name="msapplication-navbutton-color" content="#240a66" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#240a66" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5CMQGM"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
