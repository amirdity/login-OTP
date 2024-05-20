"use client";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import "./globals.css";
import RegisterPhone from "./components/LOGIN/RegisterPhone";
import DateePicker from './components/DatePicker'
//--------------REDUX----------------------------------//
import { Provider, useDispatch } from "react-redux";
import { store } from "./components/redux/store";
export default function Home() {
  // const distpach = useDispatch()
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="flex justify-center items-center bg-day dark:bg-night bg-center bg-cover ">
        <div className="flex justify-center items-center flex-col backdrop-blur backdrop-brightness-125 p-5 rounded-3xl bg-white/30 dark:bg-white/5 max-w-[500px] h-screen  pt-11">
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={setDarkMode}
            size={120}
          />
          <div className="flex justify-center flex-col">
            <p className="font-bold text-4xl text-green-500 dark:text-[#c7026b] text-center">
              {" "}
              WELLCOM TO RAYAN{" "}
            </p>
            <p className="m-5  dark:text-[#c7026b] text-center flex justify-center">
              <BsShieldLockFill size={50} />
            </p>
            <div className="ml-10 m-10">
              <RegisterPhone />
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
