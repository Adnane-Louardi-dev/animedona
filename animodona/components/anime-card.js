import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const AnimeCard = ({ props }) => {
  const [Data, setData] = useState(props);
  useEffect(() => {
    setData(props);
  }, [props]);

  // const { title, cover, mal_id, season } = props;
  return (
    <>
      <div className="relative mb-5 mx-3 flex flex-col">
        <div className="grid rounded-3xl grid-cols-1">
          <Link href={`/anime/${Data.mal_id}`}>
            <a>
              <div className="shadow-xl bg-white dark:bg-gray-800 rounded-3xl p-2">
                <div className="flex items-center justify-center">
                  <div className="relative w-1/2 mt-1 rounded-3xl">
                    <Image
                      src={Data.cover}
                      onError={() => {
                        setData({ ...Data, cover: "/animedona-image-place-holder.png" });
                      }}
                      objectFit="cover"
                      width={400}
                      height={320}
                      alt={Data.title}
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex-auto ml-3 w-1/2 justify-evenly py-2">
                    <div className="flex flex-wrap overflow-hidden">
                      <div className="w-full flex-none text-xs text-yellow-500 font-nunito font-semibold">{`#${Data.mal_id}`}</div>
                      <h2 className="text-xl w-48 font-lato text-gray-900 dark:text-white whitespace-nowrap truncate">{Data.title.slice(-1)[0]}</h2>
                      <div className="w-full flex-none text-xs text-yellow-500 font-nunito font-semibold">{Data.season}</div>
                    </div>

                    <div className="flex justify-center space-x-3 pt-3 text-sm font-medium">
                      <button
                        className="mb-0 bg-gray-900 dark:bg-white dark:text-gray-800 px-5 py-2 shadow-xl font-nunito tracking-wider text-white rounded-full dark:focus:bg-yellow-500 focus:bg-yellow-500 focus:text-white dark:focus:text-white"
                        type="button"
                        aria-label="like"
                      >
                        Get themes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AnimeCard;
