"use client";
import axios from "axios";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./RegisterPhone.css";
function RegisterPhone() {
  const [phone, setPhone] = useState("");
  const [button, setButton] = useState(true);

  function Axios() {
    setButton(false);
    const sendOtpUrl = "http://192.168.8.102:4003/auth/login-send-otp";
    const api = { mobile: `+${phone}` };
    console.log(phone);
    console.log(api);
    axios
      .post(sendOtpUrl, api)
      .then((res) => {
        console.log(res) &
          alert(res.data.message) &
          console.log(res.data.message) &
          handleClick(res.data.message);
      })
      .catch(
        (err) =>
          console.log(err) & alert("شماره مبایل معتبر نیست") & setButton(true)
      );
  }

  function handleClick(message) {
    if (
      message ===
      "کد یک بار مصرف به شماره شما ارسال شد , لطفا آن را وارد نمائید"
    ) {
      setButton(false);
      timerOTPstart();
    } else {
      console.log("function run but butten still visible");
    }
  }
  function timerOTPstart() {}

  return (
    <div className={`${button === true ? "block" : "hidden"}`}>
      <from className="flex flex-col justify-center items-center">
        <PhoneInput
          country={"ir"}
          value={phone}
          onChange={setPhone}
          autoFormat={true}
        />
        <button type="submit" className="dark:text-white" onClick={Axios}>
          submit
        </button>
      </from>
    </div>
  );
}

export default RegisterPhone;
