import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ThemeAnime from "../../components/theme-anime";
import AnimePlaceholder from "../../components/anime-placeholder";
import TopBar from "../../components/top-bar";
// export async function getStaticProps({ anime }) {
//   const { id } = anime;

//   const animeData = await fetch(`/api/v1/anime/${id}`);

//   return {
//     props: {
//       animeData,
//     },
//   };
// }
export default function Anime() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();
  const [anime, setQuery] = useState(router.query.anime);
  console.log(anime);
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
    return () => setData();
  }, []);
  return (
    <>
      {/* <Head>
        <title>{`Animedona - ${data.title.slice(-1)[0]}`} </title>
      </Head> */}
      <TopBar />
      {/* <div className="fixed z-10 t-0 w-screen flex justify-between">
        <Link href="/" passHref>
          <div className="relative h-16 w-40 mt-3 -ml-2">
            <Image src={"/animodona-logo.png"} layout="fill" objectFit="cover" alt="cover" className="" />
          </div>
        </Link>
        <button onClick={() => router.push("/")} className="m-5 flex justify-center items-center h-9 w-9 bg-violet-500 rounded-lg shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div> */}

      {data && data.themes ? (
        <>
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
                  <h3 className="font-oxygen text-gray-400 dark:text-gray-300 text-xs">{`#${data.mal_id}`}</h3>
                  <h1 className="font-openSans text-gray-700 dark:text-white text-xl w-full tracking-wide whitespace-nowrap truncate">
                    {data.title.slice(-1)[0]}
                  </h1>
                  <div className="flex my-2">
                    <p className="font-oxygen mr-1 py-1 px-2 text-white bg-yellow-500 text-xs rounded-xl whitespace-nowrap shadow-md">{data.season}</p>
                    <p className="font-oxygen mr-1 py-1 px-2 text-white bg-yellow-500 text-xs rounded-xl whitespace-nowrap shadow-md">
                      {`${data.themes.length} theme(s)`}
                    </p>
                  </div>
                </div>

                <button className="w-full md:-1/2 flex items-center text-center text-gray-700 focus:text-white w-full mx-2 mb-5 px-2 py-1 bg-white focus:bg-violet-500 ring-2 ring-gray-700 rounded-xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h1 className="font-lato my-2 mx-1 text-md whitespace-nowrap truncate">watch anime opening</h1>
                </button>
              </div>
            </div>
          </div>
          <ThemeAnime props={data} />
        </>
      ) : (
        <AnimePlaceholder />
      )}
    </>
  );
}
