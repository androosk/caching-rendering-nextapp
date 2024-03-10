import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black flex items-center text-white py-4 border-white border-b-2 h-24 fixed top-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-xl tracking-wider">
              Caching and Rendering - NextJS 14
            </Link>
          </div>
          <div className="w-1/4">
            <ul className="flex justify-around space-x-4">
              <li>
                <Link href="/static" className="hover:text-gray-300">
                  Static
                </Link>
              </li>
              <li>
                <Link href="/dynamic" className="hover:text-gray-300">
                  Dynamic
                </Link>
              </li>
              <li>
                <Link href="/incremental" className="hover:text-gray-300">
                  ISR
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
