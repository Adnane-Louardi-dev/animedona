import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ThemeAnime from "../../components/theme-anime";
import AnimePlaceholder from "../../components/anime-placeholder";
import TopBar from "../../components/top-bar";
import { Player, BigPlayButton } from "video-react";

export default function Anime() {
  const router = useRouter();
  const { anime } = router.query;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  // const [Mirrors, setMirrors] = useState([]);
  // const [ExactMirror, setExactMirror] = useState("");
  // const VidPlayer = useRef();

  useEffect(() => {
    setLoading(!loading);
    axios
      .get(`/api/v1/anime/${anime}`)
      .then((res) => {
        const { data } = res;
        if (res) {
          setData(data);
          setLoading(!loading);
        } else {
          console.log("no res");
        }
      })

      .catch((err) => console.log(err));
    // data?.themes.forEach((theme) => {
    //   Mirrors.push({ type: theme.type, mirror: theme.mirrors[0].mirror });
    // });
    return () => setData();
  }, [anime]);

  return (
    <>
      <TopBar />
      {data && data ? (
        <>
          <Head>
            <title>{`Animedona | ${data.title.slice(-1)[0]}`} </title>
          </Head>
          <div className="relative md:mx-auto md:flex md:justify-center md:w-3/4">
            <div className="flex justify-center pb-12 px-5">
              <div className="relative w-1/2 ">
                <div className="h-56 md:h-96 -z-10 w-44">
                  <Image
                    src={data.cover}
                    onError={() => {
                      setData({ ...data, cover: "/animedona-image-place-holder.png" });
                    }}
                    layout="fill"
                    objectFit="cover"
                    alt="cover"
                    className="rounded-2xl shadow-md"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-between">
                <div className="mt-5 mx-4">
                  <h3 className="font-oxygen my-2 text-gray-400 dark:text-gray-300 text-xs">{`#${data.mal_id}`}</h3>
                  <h1 className="font-openSans my-2 text-gray-700 dark:text-white text-xl w-full tracking-wide whitespace-nowrap truncate">
                    {data.title.slice(-1)[0]}
                  </h1>
                  <div className="flex my-4">
                    <p className="font-oxygen mr-1 py-1 px-2 text-white bg-yellow-500 text-xs rounded-xl whitespace-nowrap shadow-md">{data.season}</p>
                    <p className="font-oxygen mr-1 py-1 px-2 text-white bg-yellow-500 text-xs rounded-xl whitespace-nowrap shadow-md">
                      {`${data.themes.length} theme(s)`}
                    </p>
                  </div>
                  <div className="font-openSans my-2 text-gray-700 dark:text-white text-xl w-full tracking-wide whitespace-nowrap truncate">
                    <h1 className="font-oxygen my-2 text-gray-400 dark:text-gray-300 text-sm">Other Names:</h1>
                    {data.title.map((el, i) => (
                      <p key={i} className="font-lato dark:text-gray-400 text-gray-300 text-xs ">
                        {el},
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-3 mb-5 rounded-xl overflow-hidden">
              <Player playsInline poster={data.cover} src={data.themes[0].mirrors[0].mirror}>
                <BigPlayButton position="center" />
              </Player>
            </div>
          </div>
          <div className="grid justify-items-end ">
            <button className="flex items-center justify-center text-center text-gray-400 focus:text-gray-300 mx-2 px-2 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>

              <h1 className="font-lato my-2  text-sm whitespace-nowrap truncate">{`${data.themes.length} Songs available`}</h1>
            </button>
          </div>

          <ThemeAnime props={data} />
        </>
      ) : (
        <AnimePlaceholder />
      )}
    </>
  );
}
{
  /* <form id="form1">
                    <select width="300" className="font-lato my-2 mx-1 text-md whitespace-nowrap truncate">
                      <>
                        {Mirrors.length > 0
                          ? Mirrors.map((item, i) => {
                              const { type, mirror } = item;
                              return (
                                <option
                                  onClick={() => {
                                    VidPlayer.current.load();
                                    setExactMirror(mirror);
                                    console.log(mirror);
                                  }}
                                  value={type}
                                  key={i}
                                >
                                  {type}
                                </option>
                              );
                            })
                          : null}
                      </>
                      <option value="Select trailer" defaultValue>
                        Select trailer
                      </option>
                    </select>
                  </form> */
}
