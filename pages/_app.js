import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "react-h5-audio-player/lib/styles.css";
import "../styles/player.css";
import "video-react/dist/video-react.css";
import { useEffect } from "react";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-K5CMQGM" });
    if (process.env.googleAnalyticsID && process.env.NODE_ENV === "production") {
      // Checks for GA ID and only turns on GA in production
      ReactGA.initialize(process.env.googleAnalyticsID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });
  return <Component {...pageProps} className="dark" />;
}

export default MyApp;
