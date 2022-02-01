import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "react-h5-audio-player/lib/styles.css";
import "../styles/player.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="dark" />;
}

export default MyApp;