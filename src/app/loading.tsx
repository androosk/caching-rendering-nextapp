export default async function loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Loading...</h1>
        <div className="relative w-64 h-4 bg-white rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-500"
            // style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <div className="mt-8">
          <svg
            className="w-24 h-24 mx-auto text-white animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
