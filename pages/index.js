import Head from "next/head";
import AnimeCardPlaceholder from "../components/anime-card-placeholder";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import TopBar from "../components/top-bar";
import AnimeCard from "../components/anime-card";
import ThemesList from "../components/themes-list";
import ThemeListPlaceholder from "../components/theme-list-placeholder";
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://animethemes-api.herokuapp.com/api/v1/season/2020`);
  const Data = await res.json();

  // Pass data to the page via props
  return { props: { Data } };
}
export default function Home({ Data }) {
  const router = useRouter();
  //loading component
  const [loading, setLoading] = useState(false);
  //data of all seasons
  const [data, setData] = useState([]);
  //set fall season as a initial data
  const [DataSeason, setDataSeason] = useState(Data?.seasons[3].anime);
  //data of anime themes
  const [animeThemes, setAnimeThemes] = useState([]);
  //search input value
  const [searchQuery, setSearchQuery] = useState("");
  //input reference
  const inputRef = useRef(null);

  useEffect(() => {
    //create array that's contain cover,theme from Data info
    DataSeason?.slice(10, 15).map((anime) => {
      anime.themes.forEach((theme) => animeThemes.push({ cover: anime.cover, theme: theme }));
    });

    setLoading(true);
    return () => setData();
  }, [Data, DataSeason]);

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
                Data?.seasons.map((season) => setDataSeason({ anime: season.anime }));
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
                setDataSeason(Data?.seasons[0].anime);
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
                setDataSeason(Data?.seasons[1].anime);
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
                setDataSeason(Data?.seasons[2].anime);
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
                setDataSeason(Data?.seasons[3].anime);
              }}
              className="font-oxygen text-lg px-3 py-1 ml-4 md:mx-5 bg-violet-600 dark:bg-violet-900 text-white rounded-full shadow-lg"
            >
              Fall
            </button>
          </div>
        </div>
      </div>

      {loading && animeThemes.length > 0 ? (
        <div className="pt-2 relative mx-auto">
          <ThemesList data={animeThemes} />
          <div className="pt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {DataSeason.slice(0, 10).map((anime, i) => {
              return (
                <div key={i}>
                  <AnimeCard props={anime} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="noScrollbar mb-2 font-oxygen flex overflow-x-scroll">
            <ThemeListPlaceholder />
            <ThemeListPlaceholder />
            <ThemeListPlaceholder />
            <ThemeListPlaceholder />
          </div>
          <AnimeCardPlaceholder />
          <AnimeCardPlaceholder />
          <AnimeCardPlaceholder />
          <AnimeCardPlaceholder />
        </>
      )}
    </>
  );
}
