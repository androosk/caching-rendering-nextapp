import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-xl font-bold">
              Caching and Rendering - NextJS 14
            </Link>
          </div>
          <div>
            <ul className="flex space-x-4">
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
                <Link href="/isr" className="hover:text-gray-300">
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
