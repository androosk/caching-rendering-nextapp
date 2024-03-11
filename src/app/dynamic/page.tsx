import { Photo } from "pexels";
import Image from "next/image";
import fetchPhoto from "@/models/pexels";

export const metadata = {
  title: "Dynamic Fetching and Caching - Next JS 14",
};
// In the browser, the cache option of fetch indicates how a request will interact with the browser's HTTP cache, in Next.js, the cache option indicates how a server-side request will interact with the server's Data Cache.

// you can revalidate your cache on each page load this way
// export const revalidate = 0; // time based revalidation

const PexelsPhoto: React.FC = async () => {
  const photo: Photo | null = await fetchPhoto({
    // you can revalidate the cache in the fetch component as well if you want only the fetch to refresh on load
    next: { revalidate: 0 }, // time based revalidation

    // You can also use the Next cache setting to rerun the fetch on load every time
    // cache: "no-cache", "no-store" or "revalidate: (time value)", other settings in here are:
    // default
    // force-cache
    // only-if-cached
    // reload
  });

  if (!photo) {
    return <div>No photo found.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="text-black border-red-400 bg-blue-200 border-2 rounded-lg px-10 py-4 my-4 w-3/4 text-sm sm:text-base">
        This Image Rendered in a server side component using Dynamic Caching.
        The app will fetch a new image on page load every time or at certain
        intervals based on the revalidation value.
      </h1>
      <div className="relative w-2/5">
        <Image
          src={photo.src.original}
          alt={photo.alt || "photo from pexels"}
          width={200}
          height={200}
          className="rounded-lg"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {photo.alt !== "" && (
        <p className="text-sm sm:text-base">
          Description: &quot;{photo.alt}&quot;
        </p>
      )}
      <p>
        Photo by{" "}
        <span className="text-blue-400 underline">
          <a href={photo.photographer_url}>{photo.photographer}</a>
        </span>
      </p>
    </div>
  );
};

export default PexelsPhoto;
