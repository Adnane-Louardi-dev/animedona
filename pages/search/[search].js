import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import AnimeCard from "../../components/anime-card";
import TopBar from "../../components/top-bar";
import AnimeCardPlaceholder from "../../components/anime-card-placeholder";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const inputRef = useRef("");
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(router.query.search);
  const [PreSearchQuery, setPreSearchQuery] = useState(searchQuery);
  console.log(searchQuery);
  useEffect(() => {
    setLoading(false);
    axios
      .get(`/api/v1/search/${searchQuery}`)
      .then((res) => {
        const { data } = res;
        if (res) {
          setData(data);
          setLoading(true);
        } else {
          console.log("no res");
        }
      })
      .catch((err) => console.log(err));
  }, [searchQuery]);

  return (
    <>
      <Head>
        <title>{`Animedona|search for ${searchQuery}`}</title>
      </Head>
      <TopBar />
      <div className="flex mx-auto p-2 my-5">
        <div className="flex justify-between bg-white dark:bg-gray-700 w-full p-2 rounded-xl shadow-md">
          <button
            onClick={() => {
              setSearchQuery(PreSearchQuery);
              if (searchQuery) {
                router.push(`/search/${searchQuery}`);
              }
            }}
            aria-label="search"
            className="flex items-center justify-center px-3"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
          <input
            type="text"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                router.push(`/search/${PreSearchQuery}`);
              }
            }}
            onChange={() => {
              setPreSearchQuery(inputRef.current.value);
            }}
            ref={inputRef}
            className="px-1 py-2 grow outline-none dark:bg-gray-700 dark:text-white"
            placeholder="Search for a theme artist or anime"
          />
          <button
            onClick={() => {
              inputRef.current.value = "";
            }}
            aria-label="clear search"
            className="flex items-center justify-center px-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="flex justify-center ">
        <div className="flex my-2 justify-around">
          <button className="font-oxygen text-lg px-3 py-1 mx-3 border-b-2 text-gray-700 focus:border-gray-700">Animes</button>
          <button className="font-oxygen text-lg px-3 py-1 mx-3 border-b-2 text-gray-700 focus:border-gray-700">Themes</button>
          <button className="font-oxygen text-lg px-3 py-1 mx-3 border-b-2 text-gray-700 focus:border-gray-700">Artists</button>
        </div>
      </div> */}
      {/* {data ? (
        <div className="px-2 m-3">
          <h1 className="text-xl font-lato text-gray-700 dark:text-gray-200">{`${data?.anime.length} anime found`}</h1>
        </div>
      ) : null} */}

      {loading ? (
        <div className="pt-2 relative text-gray-600">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <>
              {data?.anime.map((anime, i) => {
                return (
                  <Link href={`/anime/${anime.mal_id}`} key={i}>
                    <a>
                      <AnimeCard props={anime} />
                    </a>
                  </Link>
                );
              })}
            </>
          </div>
        </div>
      ) : (
        <>
          <AnimeCardPlaceholder />
          <AnimeCardPlaceholder />
          <AnimeCardPlaceholder />
          <AnimeCardPlaceholder />
        </>
      )}
    </>
  );
}
