import { Photo } from "pexels";
import Image from "next/image";
import fetchPhoto from "@/models/pexels";

export const metadata = {
  title: "Static Fetching and Caching - Next JS 14",
};

const PexelsPhoto: React.FC = async () => {
  const photo: Photo | null = await fetchPhoto();

  if (!photo) {
    return <div>No photo found.</div>;
  }

  const width = Math.min(300, photo.width);
  const height = (width / photo.width) * photo.height;

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="text-black border-red-400 bg-blue-200 border-2 rounded-lg px-10 py-4 my-4 w-3/4 text-sm sm:text-base">
        This Image Rendered Using Static Caching. The page will fetch and cache
        at build time, and the image will remain in the browser cache until it
        is flushed, even though the app will fetch a new image on page load.
      </h1>
      <div className=" w-2/5">
        <Image
          src={photo.src.original}
          alt={photo.alt || "photo from pexels"}
          width={width}
          height={height}
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
