"use client";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import OtpInput from "react-otp-input";
// PHONE INPUT
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./globals.css";
export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [phone,setPhone]= useState("")
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  const [otp, setOtp] = useState("");
  return (
    <div className={`${isDarkMode === true ? "dark" : "light"}`}>
      <div className="bg-green-600 w-screen h-screen flex justify-center items-center dark:bg-green-950">
        <div className="flex justify-center items-center flex-col">
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={120}
          />
          <div className="flex justify-center flex-col">
            <p className="font-bold text-4xl text-white dark:text-[#c7026b]">
              {" "}
              WELLCOM TO RAYAN{" "}
            </p>
            <p className="m-5  dark:text-[#c7026b] text-center flex justify-center">
              <BsShieldLockFill size={50} />
            </p>
            <div className="ml-10 m-10">
            <PhoneInput
                country={"ir"}
                value={phone}
                onChange={setPhone}
                autoFormat={true}
              />

            </div>

            <div className="ml-[130px] border-rose-950 ">
              

              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span> &nbsp; </span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
