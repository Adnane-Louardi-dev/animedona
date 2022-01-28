import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";

import axios from "axios";
import React, { useState, useRef } from "react";
export default function ThemeAnime({ props }) {
  const [audioSrc, setAudioSrc] = useState("");
  const [PlayerOn, setPlayerOn] = useState(false);
  const audioRef = useRef(audioRef);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {props?.themes.map((theme, i) => {
          const { title, artist, type, theme_id } = theme;
          const play = () => {
            setPlayerOn(false);
            axios
              .get(`/api/v1/theme/${theme_id}/0/audio`)
              .then((res) => {
                if (res) {
                  const { data } = res;
                  setAudioSrc(data);
                  setPlayerOn(true);
                  console.log(audioSrc);
                } else {
                  console.log("no res");
                }
              })

              .catch((err) => console.log(err));
          };
          return (
            <div className="my-5" key={theme_id}>
              <div className="flex justify-between items-center rounded-xl shadow-lg bg-white dark:bg-gray-800 py-4 px-4 mx-5 mb-3">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded-md">
                    <Image src={props.cover} layout="fill" objectFit="cover" alt="cover" className="rounded-lg" />
                  </div>
                  <div className="ml-4 flex flex-col justify-between w-36">
                    <h1 className="font-openSans text-lg dark:text-white text-gray-800 tracking-wide whitespace-nowrap truncate">{title}</h1>
                    {artist ? <h3 className="font-oxygen text-gray-400 text-xs">{artist}</h3> : null}
                    <h3 className="font-oxygen text-white w-12 rounded-full text-center bg-yellow-500 p-1 my-1 text-xs">{type}</h3>
                  </div>
                </div>

                <button
                  onClick={() => play()}
                  className="flex justify-center items-center p-3 h-8 bg-gray-800 dark:bg-white rounded-2xl text-white dark:text-gray-800 font-oxygen whitespace-nowrap"
                >
                  Play it
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {PlayerOn ? (
        <div className="fixed bottom-0 p-3 w-full">
          <AudioPlayer ref={audioRef} autoPlay src={audioSrc.audio} showJumpControls />
        </div>
      ) : null}
    </>
  );
}
