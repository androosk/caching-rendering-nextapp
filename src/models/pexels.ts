import { createClient, Photo, Photos, ErrorResponse } from "pexels";

export default async function fetchPhoto(
  options?: RequestInit
): Promise<Photo | null> {
  try {
    const client = createClient(process.env.PEXELS_API_KEY as string);
    const response: Photos | ErrorResponse = await client.photos.curated({
      per_page: 40,
    });

    if ("error" in response) {
      throw new Error(`Failed to fetch photos: ${response.error}`);
    }

    const { photos } = response;
    const photoIndex: number = Math.floor(Math.random() * photos.length);
    return photos[photoIndex];
  } catch (error) {
    console.error("Error fetching photo from Pexels:", error);
    return null;
  }
}
