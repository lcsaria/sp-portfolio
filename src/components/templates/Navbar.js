import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    if (width < 1024) {
      setOpen(false);
    }
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  return (
    <div className="min-h-full w-full h-15 bg-black sticky top-0 z-50">
      <nav className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div>
                  <h1 className="text-5xl font-mono ml-2 text-gray-300">
                    Lmarl
                  </h1>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="mr-10 flex items-baseline space-x-4">
                <ul className="hidden md:flex">
                  {width < 1024
                    ? null
                    : links.map(({ id, link }) => (
                        <li
                          key={id}
                          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                        >
                          <Link to={link} smooth duration={500}>
                            {link}
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                type="button"
                className="px-3 inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setOpen(!isOpen)}
              >
                <span>
                  {isOpen === false ? (
                    <i className="fa-solid fa-bars fa-2x" />
                  ) : (
                    <i className="fa-solid fa-xmark fa-2x" />
                  )}
                </span>
              </button>
            </div>
          </div>

          <div className="lg:hidden" id="mobile-menu">
            {isOpen === false ? null : (
              <div className=" px-2  sm:px-4">
                {links.map(({ id, link }) => (
                  <div
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-2xl"
                  >
                    <Link
                      onClick={() => setOpen(!isOpen)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {link}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
