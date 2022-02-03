import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
// import { AudioPlayer } from "react-h5-audio-player";
import ThemeListPlaceholder from "./theme-list-placeholder";
import axios from "axios";
import ThemesListNested from "./themes-list-nested";
export default function ThemesList({ data }) {
  const [Data, setData] = useState(data);
  const [animeThemes, setAnimeThemes] = useState([]);
  const [audioSrc, setAudioSrc] = useState("");
  const [PlayerOn, setPlayerOn] = useState(false);
  const audioRef = useRef(audioRef);
  useEffect(() => {
    setData(data);
    setAnimeThemes([]);
  }, [data]);
  // Data?.anime.slice(0, 3).map((anime) => {
  //   const { cover } = anime;
  //   if (animeThemes.length < 10) {
  //     anime?.themes.map((theme) => setAnimeThemes(animeThemes.push({ cover: cover, theme: theme })));
  //   }
  // });
  return (
    <>
      {/* {animeThemes.length > 1 ? ( */}
      <ul className="noScrollbar mb-2 font-oxygen flex overflow-x-scroll">
        {Data?.map((item, i) => {
          console.log(item);
          return (
            <li key={i}>
              <ThemesListNested props={item} />
            </li>
          );
          // const { cover, theme } = item;

          // const play = () => {
          //   setPlayerOn(false);
          //   axios
          //     .get(`/api/v1/theme/${theme.theme_id}/0/audio`)
          //     .then((res) => {
          //       if (res) {
          //         const { audio } = res.data;
          //         setAudioSrc(audio);
          //         setPlayerOn(true);
          //         console.log(audioSrc);
          //       } else {
          //         console.log("no res");
          //       }
          //     })

          //     .catch((err) => console.log(err));
          // };

          // return (
          //   <div className="h-48 w-40 mr-3" key={theme.theme_id}>
          //     <div className="group rounded-3xl relative h-48 w-40 mx-3 shadow-md ">
          //       <div className=" opacity-0 group-hover:opacity-100 flex flex-col absolute t-0 b-0 h-48 w-40 z-20 justify-center items-center backdrop-brightness-50 rounded-3xl">
          //         {PlayerOn ? (
          //           <svg
          //             xmlns="http://www.w3.org/2000/svg"
          //             onClick={() => play()}
          //             className="h-16 w-16 text-yellow-500"
          //             fill="none"
          //             viewBox="0 0 24 24"
          //             stroke="currentColor"
          //           >
          //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          //           </svg>
          //         ) : (
          //           <svg
          //             xmlns="http://www.w3.org/2000/svg"
          //             onClick={() => setPlayerOn(!PlayerOn)}
          //             className="h-16 w-16 text-yellow-500"
          //             fill="none"
          //             viewBox="0 0 24 24"
          //             stroke="currentColor"
          //           >
          //             <path
          //               strokeLinecap="round"
          //               strokeLinejoin="round"
          //               strokeWidth={2}
          //               d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          //             />
          //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          //           </svg>
          //         )}
          //       </div>
          //       <div className="flex absolute bg-transparent t-0 b-0 z-10 h-48 w-40 flex-col justify-between">
          //         <div className="flex  justify-between m-3">
          //           <p className="p-1 bg-yellow-600 rounded-xl text-xs text-white font-lato">{theme.type}</p>
          //           <p className="p-1 bg-yellow-600 rounded-xl text-xs text-white font-lato">{theme.theme_id}</p>
          //         </div>

          //         <div className="mx-3 my-5">
          //           {theme.episodes ? <p className="p-1 font-lato text-yellow-500 text-xs rounded-md">{`episodes: ${theme.episodes}`}</p> : null}
          //           <h1 className="text-white text-lg font-openSans whitespace-nowrap truncate">{theme.title}</h1>
          //         </div>
          //       </div>
          //       <div className="relative brightness-50 bg-gray-300 h-48 w-40 rounded-3xl overflow-hidden">
          //         <Image layout="fill" objectFit="cover" src={cover} alt="pic" className="blur-xs " />
          //       </div>
          //     </div>
          //   </div>
          // );
        })}
      </ul>
      {/* ) : (
        <div className="noScrollbar mb-2 font-oxygen flex overflow-x-scroll">
          <ThemeListPlaceholder />
          <ThemeListPlaceholder />
          <ThemeListPlaceholder />
          <ThemeListPlaceholder />
        </div>
      )} */}
      {/* <div className="fixed z-10 bottom-0 p-3 w-full">{PlayerOn ? <AudioPlayer ref={audioRef} autoPlay src={audioSrc} showJumpControls /> : null}</div> */}
    </>
  );
}
