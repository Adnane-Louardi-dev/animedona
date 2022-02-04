import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
// import { AudioPlayer } from "react-h5-audio-player";
import ThemeListPlaceholder from "./theme-list-placeholder";
import ThemesListNested from "./themes-list-nested";
export default function ThemesList({ data }) {
  const [Data, setData] = useState();
  const [animeThemes, setAnimeThemes] = useState([]);
  const [audioSrc, setAudioSrc] = useState("");
  const [PlayerOn, setPlayerOn] = useState(false);
  const audioRef = useRef(audioRef);
  const reform = () => {
    data?.anime.slice(0, 3).map((anime) => {
      const { cover } = anime;
      if (animeThemes.length < 10) {
        anime.themes.map((theme) => setAnimeThemes(animeThemes.push({ cover: cover, theme: theme })));
      }
    });
  };
  if (Data) {
    reform();
  }
  useEffect(() => {
    setData(data);
    setAnimeThemes([]);
  }, [data]);

  return (
    <>
      {animeThemes.length > 0 ? (
        <ul className="noScrollbar mb-2 font-oxygen flex overflow-x-scroll">
          {animeThemes.map((item, i) => {
            return (
              <li key={i}>
                <ThemesListNested data={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="noScrollbar mb-2 font-oxygen flex overflow-x-scroll">
          <ThemeListPlaceholder />
          <ThemeListPlaceholder />
          <ThemeListPlaceholder />
          <ThemeListPlaceholder />
        </div>
      )}
      {/* <div className="fixed z-10 bottom-0 p-3 w-full">{PlayerOn ? <AudioPlayer ref={audioRef} autoPlay src={audioSrc} showJumpControls /> : null}</div> */}
    </>
  );
}
