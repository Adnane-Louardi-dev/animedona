export default function AnimeCardPlaceholder() {
  return (
    <div className="relative mb-5 mx-3 flex flex-col">
      <div className="grid rounded-3xl grid-cols-1">
        <div className="shadow bg-gray-100 dark:bg-gray-600 rounded-3xl p-2">
          <div className="flex items-center justify-center p-2">
            <div className="relative w-1/2 h-28 rounded-3xl bg-gray-300 dark:bg-gray-800"></div>
            <div className="flex-auto ml-3 w-1/2 justify-evenly py-2">
              <div className="flex flex-wrap overflow-hidden">
                <div className="w-full h-8 rounded-xl mb-2 flex-none bg-gray-300 dark:bg-gray-700"></div>
                <h2 className="w-48 h-10 rounded-xl bg-gray-300 dark:bg-gray-700"></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
