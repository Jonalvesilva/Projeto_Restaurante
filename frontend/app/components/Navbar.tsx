"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import data from "../../utils/restApi.json";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div
        className=" flex items-center justify-between w-full h-[100px] bg-[#3e2723]/90 border-b-2 border-b-orange-500 min-w-[500px]"
        id="navbar"
      >
        <div className="flex h-[150px] w-full mx-10 justify-between">
          <div className="text-3xl text-white flex items-center">
            Le Chateau Brasil
          </div>
          <div className="hidden min-[900px]:flex items-center justify-center">
            {data.data[0].navbarLinks.map((item) => {
              return (
                <Link
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={900}
                  onClick={handleNav}
                  className="text-2xl text-white px-4 cursor-pointer hover:text-orange-500 ease-in duration-100 "
                  key={item.link}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="flex min-[900px]:hidden items-center justify-center px-8">
            <IoMdMenu
              size={30}
              className="text-white cursor-pointer"
              onClick={handleNav}
            />
          </div>
        </div>
      </div>

      <div id="mobile-menu">
        <div
          className={
            nav
              ? "min-[900px]:hidden fixed left-0 top-0 w-full h-screen bg-orange-300/35 z-10"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#020303] p-10 ease-in duration-300"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#020303] ease-in duration-300"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <h2 className="text-2xl text-white">LE CHATEAU BRASIL</h2>
                <div
                  onClick={handleNav}
                  className="text-white rounded-full p-3 bg-orange-500 cursor-pointer "
                >
                  <AiOutlineClose size={20} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <ul className="uppercase flex flex-col mt-[150px] items-center">
                  {data.data[0].navbarLinks.map((item) => {
                    return (
                      <li className="py-4" key={`li_${item.link}`}>
                        <Link
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={900}
                          onClick={handleNav}
                          className="text-2xl text-white px-4 cursor-pointer hover:text-orange-500 ease-in duration-100 "
                          key={item.link}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
