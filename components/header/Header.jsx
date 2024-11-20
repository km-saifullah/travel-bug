"use client";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { LuSunDim } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";
import ToggleBar from "../togglebar/ToggleBar";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenubar = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4">
      <div className="container">
        <section className="flex items-center justify-between relative">
          <section className="items-center gap-x-3 hidden xl:flex">
            <div className="w-[35px] h-[35px] bg-secondary text-white rounded-full flex items-center justify-center text-xl">
              <MdOutlineLocalPhone />
            </div>
            <div className="space-y-2">
              <p className="font-normal font-nunito text-base text-text">
                Call from anywhere
              </p>
              <h4 className="font-semibold font-nunito text-base">
                +880 2345678900
              </h4>
            </div>
          </section>
          <section>
            <Link href={"/"}>
              <h2
                className={`text-2xl md:text-3xl font-bold  font-roboto ${
                  theme == "dark" ? "text-white" : "text-primary"
                }`}
              >
                <span className="text-secondary">Travel</span>Bug
              </h2>
            </Link>
          </section>
          <section className="flex items-center gap-x-4">
            <div className="px-3 py-2 border rounded-3xl items-center gap-x-2 hidden xl:flex">
              <CiGlobe />
              <button>English</button>
            </div>
            <div className="hidden xl:block">
              <p>|</p>
            </div>
            <div className="hidden xl:block">
              <button
                className={`px-5 py-2 border rounded-3xl text-base font-normal font-roboto text-primary' ${
                  theme == "dark" ? "text-white" : "text-primary"
                }`}
              >
                Sign In
              </button>
            </div>
            <div className="hidden xl:block">
              <button className="px-5 py-2 border rounded-3xl bg-btnBg text-white font-roboto font-normal text-base hover:transition-all hover:duration-300 hover:ease-linear hover:bg-white hover:text-primary hover:border">
                Sign Up
              </button>
            </div>
            <div className="cursor-pointer" onClick={toggleTheme}>
              {theme === "light" ? (
                <MdDarkMode className="text-primary font-normal text-3xl" />
              ) : (
                <LuSunDim className="text-white font-normal text-3xl" />
              )}
            </div>

            {/* hamburger menubar */}
            <div
              className="cursor-pointer block xl:hidden"
              onClick={handleMenubar}
            >
              <HiBars3
                className={`font-normal text-3xl ${
                  theme == "dark" ? "text-white" : "text-primary"
                }`}
              />
            </div>
          </section>
        </section>
        <section
          className={`absolute w-full top-[-300px] left-0 transition-all ease-in-out duration-500 ${
            isOpen &&
            "top-[60px] left-0 transition-all ease-in-out duration-500"
          }`}
        >
          <ToggleBar />
        </section>

        <div className="border-none md:border-b mt-5"></div>
      </div>
    </header>
  );
};

export default Header;
