import Head from "next/head";
import AnimeCardPlaceholder from "../components/anime-card-placeholder";
import ThemeListPlaceholder from "../components/theme-list-placeholder";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import TopBar from "../components/top-bar";
import AnimeCard from "../components/anime-card";
import AudioPlayer from "react-h5-audio-player";
import ThemesList from "../components/themes-list";

export default function Home() {
  const router = useRouter();
  //loading component
  const [loading, setLoading] = useState(false);
  //data of all seasons
  const [data, setData] = useState();
  //data of specific season
  const [DataSeason, setDataSeason] = useState();
  //search input value
  const [searchQuery, setSearchQuery] = useState("");
  //input reference
  const inputRef = useRef(null);

  useEffect(() => {
    setLoading(!loading);
    axios
      .get("/api/v1/season/2020")
      .then((res) => {
        const { data } = res;
        if (res) {
          setData(data);
          //set fall season as a initial data
          setDataSeason(data?.seasons[3]);
          setLoading(true);
        } else {
          console.log("no res");
        }
      })
      .catch((err) => console.log(err));
    return () => setData();
  }, []);
  return (
    <>
      <Head>
        <title>Animedona | best anime themes resource</title>
      </Head>
      <TopBar />
      {/* <div className="h-52 w-full p-2">
        <div className="flex flex-col justify-center px-3 bg-orange-200 h-full rounded-2xl shadow-md">
          <h1 className="text-3xl font-lato text-gray-700">AnimEdona, 🎧</h1>
          <p className="text-md text-gray-700">Simply curious anime songs platform.</p>
          <button className="font-oxyge w-24 text-lg px-3 py-1 mt-3 bg-gray-700 text-white rounded-2xl shadow-lg">Share it</button>
        </div>
      </div> */}
      <div className="flex w-full md-:w-1/2 xl:w-2/4 mx-auto p-2 mb-5">
        <div className="flex justify-between bg-white dark:bg-gray-700 w-full p-2 rounded-2xl shadow-md">
          <button
            onClick={() => {
              setSearchQuery(inputRef.current.value);
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
            onChange={() => {
              setSearchQuery(inputRef.current.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                router.push(`/search/${searchQuery}`);
              }
            }}
            ref={inputRef}
            className="dark:bg-gray-700 dark:text-white truncate py-2 grow outline-none"
            placeholder="Search now for a theme artist or anime"
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

      <div className="overflow-hidden">
        <div className="flex md:justify-center">
          <div className="noScrollbar flex mb-3 overflow-x-scroll md:overflow-hidden">
            <button
              onClick={() => {
                if (DataSeason) {
                  setDataSeason();
                }
                //concat all seasons -still a bug-
                data?.seasons.map((season) => setDataSeason({ anime: season.anime }));
                console.log(DataSeason);
              }}
              className="font-oxygen text-lg px-3 py-1 ml-4 md:mx-5 bg-violet-600 dark:bg-violet-900 text-white rounded-full shadow-lg whitespace-nowrap"
            >
              All seasons
            </button>
            <button
              onClick={() => {
                if (DataSeason) {
                  setDataSeason();
                }
                setDataSeason(data?.seasons[0]);
              }}
              className="font-oxygen text-lg px-3 py-1 ml-4 md:mx-5 bg-violet-600 dark:bg-violet-900 text-white rounded-full shadow-lg"
            >
              Winter
            </button>
            <button
              onClick={() => {
                if (DataSeason) {
                  setDataSeason();
                }
                setDataSeason(data?.seasons[1]);
              }}
              className="font-oxygen text-lg px-3 py-1 ml-4 md:mx-5 bg-violet-600 dark:bg-violet-900 text-white rounded-full shadow-lg"
            >
              Spring
            </button>
            <button
              onClick={() => {
                if (DataSeason) {
                  setDataSeason();
                }
                setDataSeason(data?.seasons[2]);
              }}
              className="font-oxygen text-lg px-3 py-1 ml-4 md:mx-5 bg-violet-600 dark:bg-violet-900 text-white rounded-full shadow-lg"
            >
              Summer
            </button>
            <button
              onClick={() => {
                if (DataSeason) {
                  setDataSeason();
                }
                setDataSeason(data?.seasons[3]);
              }}
              className="font-oxygen text-lg px-3 py-1 ml-4 md:mx-5 bg-violet-600 dark:bg-violet-900 text-white rounded-full shadow-lg"
            >
              Fall
            </button>
          </div>
        </div>
        {loading ? (
          <>
            <div className="noScrollbar py-3 mb-2 font-oxygen flex overflow-x-scroll">
              <ThemesList data={DataSeason} />
            </div>
          </>
        ) : null}
      </div>

      <div className="pt-2 relative mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {loading && DataSeason ? (
            <>
              {DataSeason?.anime.map((anime, i) => {
                return <AnimeCard props={anime} key={i} />;
              })}
            </>
          ) : (
            <>
              <AnimeCardPlaceholder />
              <AnimeCardPlaceholder />
              <AnimeCardPlaceholder />
              <AnimeCardPlaceholder />
            </>
          )}
        </div>
      </div>
    </>
  );
}
