"use client";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { PhotosWithTotalResults } from "pexels";

// this could also be done with Next Server Actions, which also allow html forms to act as they are supposed to without javascript
const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] =
    useState<PhotosWithTotalResults | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();
    if (query) {
      try {
        setLastQuery(query);
        const response = await fetch(`/api/search?query=${query}`);
        const data: any = await response.json();
        if ("error" in data) {
          console.error("Error fetching search results:", data.error);
          setSearchResults(null);
        } else {
          setSearchResults(data as PhotosWithTotalResults);
          setSearchQuery("");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center justify-center rounded-sm text-black m-4"
      >
        <div className="flex items-center justify-center p-2 rounded-lg bg-white">
          <input
            type="text"
            name="query"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="search images"
            className="px-2 border-white"
          />
          <button type="submit">
            <FaSearch color="gray" className="bg-white h-auto" />
          </button>
        </div>
      </form>
      {searchResults && (
        <div className="flex flex-col items-center">
          <h1 className="text-black border-red-400 bg-blue-200 border-2 rounded-lg px-10 py-4 my-4 w-3/4 text-sm sm:text-base">
            This page fetches data client-side. In order to not leak API
            credentials, the request is sent to a NextJS route handler that runs
            on the server. This route handler then fetches the data from the
            Pexels API and returns it to the client.
          </h1>
          <h1 className="text-2xl text-center py-4">
            Your results for {lastQuery}
          </h1>
          <div className="flex flex-wrap px-4 justify-center">
            {searchResults?.photos.map(photo => (
              <div key={photo.id} className="overflow-hidden p-2">
                <a href={photo.url} target="_blank">
                  <Image
                    src={photo.src.medium}
                    alt={photo.alt || "photo from pexels"}
                    className="object-cover w-full h-full"
                    width={288}
                    height={288}
                    layout="responsive"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
