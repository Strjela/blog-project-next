"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
/* import { Link } from 'next-view-transitions'; */
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useReadingProgress } from "../../hooks/useReadingProgress";

export default function Header() {
  const [nav, setNav] = useState(false);
  const currentRoute = usePathname();

  const completion = useReadingProgress();
  /* If scrollPosition is 0 NavBar is transparent otherwise its white */
  const scrollPosition = useScrollPosition();
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const navItems = [
    { id: 1, text: "HOME", link: "/" },
    { id: 2, text: "BLOGS", link: "/blogs" },
    { id: 4, text: "ABOUT", link: "/about" },
    { id: 5, text: "CONTACT", link: "/contact" },
  ];

  return (
    <header className="sticky z-40 w-full top-0  ">
      <div
        className={classNames(
          scrollPosition > 0 ? "bg-white shadow-lg  px-4" : "bg-transparent",
          "absolute mx-auto min-w-full ease-out duration-500 top-0"
        )}
      >
        <span
          style={{
            transform: `translateX(${completion - 100}%)`,
          }}
          className={classNames(
            currentRoute.startsWith("/blogs/") ? "absolute" : "hidden",
            ` bottom-0 w-full transition-transform duration-150 h-2 bg-yellow-500`
          )}
        />
        <div className="flex justify-between  max-w-[1240px] mx-auto   items-center h-20  text-black w-full px-4 ">
          <h1
            className={classNames(
              scrollPosition > 0 ? "text-black" : "text-white",
              "text-3xl md:text-4xl font-bold sedgwick"
            )}
          >
            <Link href="/">SkyAdventure</Link>
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-14 font font-jost ">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={classNames(
                  currentRoute === item.link ? "text-yellow-500 " : "",
                  classNames(
                    scrollPosition > 0 ? "text-black" : "text-white",
                    "hover:text-yellow-500 tracking-wider text-lg font-semibold  cursor-pointer duration-300  relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                  )
                )}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className="block md:hidden text-black font-extrabold"
          >
            {nav ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu
                size={28}
                className={classNames(
                  scrollPosition > 0 ? "text-black" : "text-white",
                  "text-4xl font-bold sedgwick"
                )}
              />
            )}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? " fixed md:hidden  left-0  top-[0rem] w-[100%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-40 "
                : "ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%] mt-3 bg-white "
            }
          >
            {/* Mobile Logo */}
            <div className="flex justify-between items-center px-4 border-b-2 shadow-md bg-white">
              <h1 className="w-full text-3xl font-bold text-yellow-600 sedgwick m-4 ">
                SkyAdventure
              </h1>

              <div
                onClick={handleNav}
                className="block md:hidden text-black font-extrabold"
              >
                {nav ? (
                  <AiOutlineClose size={28} />
                ) : (
                  <AiOutlineMenu size={28} />
                )}
              </div>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-6  duration-300 text-2xl text-black font-extrabold hover:text-yellow-500 cursor-pointer border-gray-600 text-center shadow-sm"
                onClick={handleNav}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
