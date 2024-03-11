"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "underline underline-offset-4" : "";
  };

  return (
    <nav className="bg-black text-white py-4 border-white border-b-2 md:h-24 fixed top-0 left-0 w-full flex items-center z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-lg md:text-xl tracking-wider">
              Caching and Rendering - NextJS 14
            </Link>
          </div>
          <div className="hidden md:block md:w-1/4">
            <ul className="flex space-x-4 justify-around">
              <li>
                <Link
                  href="/static"
                  className={`hover:text-gray-300 ${isActive("/static")}`}
                >
                  Static
                </Link>
              </li>
              <li>
                <Link
                  href="/dynamic"
                  className={`hover:text-gray-300 ${isActive("/dynamic")}`}
                >
                  Dynamic
                </Link>
              </li>
              <li>
                <Link
                  href="/incremental"
                  className={`hover:text-gray-300 ${isActive("/incremental")}`}
                >
                  ISR
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/search"
                  className={`hover:text-gray-300 ${isActive("/search")}`}
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/static"
                  className={`hover:text-gray-300 ${isActive("/static")}`}
                >
                  Static
                </Link>
              </li>
              <li>
                <Link
                  href="/dynamic"
                  className={`hover:text-gray-300 ${isActive("/dynamic")}`}
                >
                  Dynamic
                </Link>
              </li>
              <li>
                <Link
                  href="/incremental"
                  className={`hover:text-gray-300 ${isActive("/incremental")}`}
                >
                  ISR
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
