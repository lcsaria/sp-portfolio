import React, { useState } from "react";

function Navigation() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-zinc-100 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold">Lmarl Saria</h2>
            </a>
            <div className="md:hidden">
              <span className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border text-center">
                <button className="p-2" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <i class="fa-solid fa-xmark fa-2xl" />
                  ) : (
                    <i class="fa-solid fa-bars fa-xl" />
                  )}
                </button>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
              navbar ? "block py-3" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-uppercase">
              <li className="text-gray-600 hover:text-blue-600">
                <a className="ml-2" href="#">
                  <span>
                    <i className="fa-solid fa-home text-center mr-3" />
                  </span>
                  Home
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a className="ml-2" href="#about">
                  <span>
                    <i className="fa-solid fa-user text-center mr-3" />
                  </span>
                  About
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a className="ml-2" href="#skills">
                  <span>
                    <i className="fa-solid fa-gears text-center mr-3" />
                  </span>
                  Skills
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a className="ml-2" href="javascript:void(0)">
                  <span>
                    <i className="fa-solid fa-address-card text-center mr-3" />
                  </span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
