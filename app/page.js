"use client";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import "./globals.css";
import RegisterPhone from "./components/RegisterPhone/RegisterPhone";
import RegisterForm from "./components/features/form/RegisterForm";
export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <div className={`${isDarkMode === true ? "dark" : "light"}`}>
      <div className=" w-screen h-screen flex justify-center items-center dark:bg-green-950 bg-day dark:bg-night bg-center bg-cover ">
        <div className="flex justify-center items-center flex-col backdrop-blur backdrop-brightness-125 p-10 rounded-3xl bg-white/30 dark:bg-white/5 ">
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={setDarkMode}
            size={120}
          />
          <div className="flex justify-center flex-col">
            <p className="font-bold text-4xl text-green-500 dark:text-[#c7026b]">
              {" "}
              WELLCOM TO RAYAN{" "}
            </p>
            <p className="m-5  dark:text-[#c7026b] text-center flex justify-center">
              <BsShieldLockFill size={50} />
            </p>
            <div className="ml-10 m-10">
              <RegisterPhone />
              <RegisterForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
