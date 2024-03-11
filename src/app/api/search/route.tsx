import { createClient, PhotosWithTotalResults, ErrorResponse } from "pexels";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  if (!query) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 }
    );
  }

  try {
    const client = createClient(process.env.PEXELS_API_KEY as string);
    const searchResults: PhotosWithTotalResults | ErrorResponse =
      await client.photos.search({
        query,
        per_page: 10,
      });
    return NextResponse.json(searchResults);
  } catch (error) {
    console.error("Error searching photos:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
