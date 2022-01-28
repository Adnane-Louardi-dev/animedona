export default function ThemeListPlaceholder() {
  return (
    <div className="h-52 w-40 mx-3">
      <div className="group rounded-3xl h-48 w-40 mx-3 bg-gray-100 dark:bg-gray-600 rounded-3xl shadow-md">
        <div className="flex z-10 h-48 w-40 flex-col justify-between">
          <div className="flex justify-between m-3">
            <p className="h-5 w-10 bg-gray-300 dark:bg-gray-800 rounded-xl"></p>
            <p className="h-5 w-10 bg-gray-300 dark:bg-gray-800 rounded-xl"></p>
          </div>
          <div className="mx-3 my-5">
            <p className="bg-gray-300 dark:bg-gray-700 w-20 h-7 rounded-2xl mb-2"></p>
            <h1 className="w-full h-7 bg-gray-300 dark:bg-gray-700 rounded-2xl"></h1>
          </div>
        </div>
      </div>
    </div>
  );
}
