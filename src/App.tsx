import { createSignal } from 'solid-js';
import './App.css';

import 'vidstack/bundle';

function App() {
  const [vidurl, setVidurl] = createSignal("https://www041.vipanicdn.net/streamhls/012ef98641ababee475564c70e8ebc93/ep.220.1709277897.m3u8");

  // TODO: create a url validator
  // const isValidVideoUrl = (url: string) => {
  //   const videoFormats = /\.(mp4|webm|m3u8)$/i; 
  //   return videoFormats.test(url);
  // };

  const handleVideoUrlChange = (e: Event) => {
    e.preventDefault();
    const inputElement = e.target as HTMLFormElement;
    const formData = new FormData(inputElement);
    const url = formData.get("video-url") as string;

    setVidurl(url);
  }

  return (
    <>
      <media-player
        class="pb-10"
        src={vidurl()}
      >
        <media-provider></media-provider>
        <media-video-layout />
      </media-player>
      <form class="max-w-md mx-auto" onSubmit={handleVideoUrlChange}>
        <label
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Video URL
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="video-url"
            name="video-url"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter video URL"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Change Video
          </button>
        </div>
      </form>
    </>
  )
}

export default App
