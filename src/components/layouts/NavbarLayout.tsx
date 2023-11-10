import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`bg-white border-gray-200 sm:px-6 md:px-11 sticky top-0 z-20 ${isScrolled ? "bg-opacity-60 backdrop-filter backdrop-blur-md" : ""}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-3xl md:text-2xl whitespace-nowrap font-bold ">
              RafiTanujaya
            </span>
          </Link>
          <button
            onClick={() => toggleMenu()}
            type="button"
            className="inline-flex items-center p-2 w-11 h-11 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={` ${isMenuOpen? "" : "hidden"} w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 lg:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#about"
                  className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLayout;
