import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-300 to-purple-400">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-8">
          Oops! Page not found
        </h2>
        <div className="mb-8">
          <svg
            className="w-48 h-48 mx-auto text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-xl text-white mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <p className="px-6 py-3 bg-white text-purple-500 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition duration-300">
            Go back home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
