"use client";

//import next image
import Image from "next/image";

//import next link
import Link from "next/link";

//import icons

import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const openDropdown = () => {
    setdropdown(!dropdown);
  };
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div>
      <nav>
        {/* navbar for large screen */}
        <div className="hidden md:flex bg-orange-500 justify-between items-center px-5 py-1">
          <div className="flex gap-3 items-center">
            <div>
              <a href="/">
                <Image
                  src="/images/rajni-logo.png"
                  alt="logo"
                  className="w-16 "
                  width={500}
                  height={500}
                />
              </a>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                <Link href="/">Rajni Gupta</Link>
              </p>
              <p className="text-xs text-gray-200">Optimistic,Devoted Woman</p>
            </div>
          </div>

          <ul className="flex space-x-8">
            <Link href="/">
              <li className="font-medium text-white text-xl cursor-pointer">
                Home
              </li>
            </Link>

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-green-600 hover:bg-green-800 focus:outline-none  font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center "
              type="button"
              onClick={openDropdown}
            >
              Rajni Gupta
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className={
                dropdown
                  ? `z-10 absolute top-20 right-  bg-orange-500 divide-y divide-gray-100 rounded-lg shadow w-44`
                  : "hidden"
              }
            >
              <ul
                className="py-2  text-white font-medium  "
                aria-labelledby="dropdownDefaultButton"
              >
                <Link href="/about"><li className="block px-4 py-2 hover:bg-orange-300 cursor-pointer">  About</li></Link>
                <Link href="/educationalQualifications"> <li className="block px-4 py-2 hover:bg-orange-300 cursor-pointer">  Educational Qualification</li></Link>
                <Link href="/experience"><li className="block px-4 py-2 hover:bg-orange-300 cursor-pointer">  Experience</li></Link>
                <Link href="/timelines"><li className="block px-4 py-2 hover:bg-orange-300 cursor-pointer">  Timelines</li></Link>
              </ul>
            </div>

            <Link href="/gallery">
              <li className="font-medium text-white text-xl cursor-pointer">
                Gallery
              </li>
            </Link>

            <Link href="/contact">
              <li className="font-medium text-white text-xl cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* Navbar for small screen */}
        <div className="bg-orange-500 px-3 py-1 flex justify-between items-center md:hidden">
          <div className="flex gap-3 items-center">
            <div>
              <a href="/">
                <Image
                  src="/images/rajni-logo.png"
                  alt="logo"
                  className="w-16 "
                  width={500}
                  height={500}
                />
              </a>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                <Link href="/">Rajni Gupta</Link>
              </p>
              <p className="text-xs text-gray-200">Optimistic,Devoted Woman</p>
            </div>
          </div>
          <BiMenuAltRight
            onClick={openMenu}
            className="text-5xl text-white cursor-pointer"
          />
          <div
            className={
              menu
                ? ` h-full w-1/2 absolute top-0 right-0 bg-orange-500 z-50`
                : `hidden`
            }
          >
            <RxCross2
              className="text-4xl text-white font-medium  float-right m-3 cursor-pointer"
              onClick={closeMenu}
            />

            <ul className="flex flex-col gap-10 my-24 items-center">
              <Link href="/">
                <li className="text-white font-medium  text-xl cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="text-white font-medium  text-xl cursor-pointer">
                  About
                </li>
              </Link>

              <Link href="/gallery">
                <li className="text-white font-medium  text-xl cursor-pointer">
                  Gallery
                </li>
              </Link>
              <Link href="/educationalQualifications">
                <li className="text-white  font-medium  text-xl cursor-pointer">
                  Educational <br/> Qualifications
                </li>
              </Link>
              <Link href="/experience">
                <li className="text-white font-medium  text-xl cursor-pointer">
                  Experience
                </li>
                </Link>
              <Link href="/contact">
                <li className="text-white font-medium  text-xl cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
