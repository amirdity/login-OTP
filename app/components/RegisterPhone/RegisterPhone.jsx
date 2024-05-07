"use client";
import axios from "axios";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import OtpInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";
import "./RegisterPhone.css";
function RegisterPhone() {
  const [phone, setPhone] = useState("");
  const [buttonPhone, setButtonPhone] = useState(true);
  const [buttonOtp, setButtonOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [token, setToken] = useState("");
  const [id, setId] = useState("");

  function AxiosPhone() {
    setButtonPhone(false);
    const sendOtpUrl = "http://192.168.8.100:4003/auth/login-send-otp";
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
          console.log(err) &
          alert("شماره مبایل معتبر نیست") &
          setButtonPhone(true)
      );
  }

  function handleClick(message) {
    if (
      message ===
      "کد یک بار مصرف به شماره شما ارسال شد , لطفا آن را وارد نمائید"
    ) {
      setButtonPhone(false);
      setButtonOtp(true);
    } else {
      console.log("function run but butten still visible");
    }
  }

  function AxiosOTP() {
    const verifyOTP = "http://192.168.8.100:4003/auth/login-verify-otp";
    const api = { mobile: `+${phone}`, otp_code: `${otp}` };
    console.log(phone);
    console.log(otp);
    console.log(api);
    axios
      .post(verifyOTP, api)
      .then(
        (res) =>
          console.log(res) &
          alert(res.data.message) &
          setToken(res.data.access_token.access_token) &
          console.log(res.data.access_token.access_token) &
          AxiosJwt(res.data.access_token.access_token) &
          handleButtonOtp(res.data.message)
      )
      .catch((err) => console.log(err));
  }
  function handleButtonOtp(message) {
    if (message === "اعتبار سنجی کد یک بار مصرف با موفقیت انجام شد") {
      setButtonOtp(false);
      AxiosJwt();
    }
  }
  // یه چیزی رو جا انداختی
  function AxiosJwt(token) {
    setToken(token);
    axios
      .get("http://192.168.8.100:4003/customer/info", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(
        (res) =>
          console.log(res) &
          alert("ورود موفقیت آمیز بود") &
          console.log(res.data.customer.id) &
          setId(res.data.customer.id) &
          registerOrNot(res.data.customer.email) &
          console.log(res.data.customer.email)
      )
      .catch((err) => console.log(err));
  }
  function registerOrNot(email) {
    if (email === true) {
      alert("کاربر قبلا ثبت نام کرده است ");
    } else {
      setShowForm(true);
    }
  }

  return (
    <div>
      <from
        className={`flex flex-col justify-center items-center ${
          buttonPhone === true ? "block" : "hidden"
        }`}
      >
        <PhoneInput
          country={"ir"}
          value={phone}
          onChange={setPhone}
          autoFormat={true}
          required
          onlyCountries={["ir"]}
        />
        <button type="submit" className="dark:text-white" onClick={AxiosPhone}>
          submit
        </button>
      </from>
      <div
        className={`flex flex-col justify-center items-center ${
          buttonOtp === true ? "block" : "hidden"
        }`}
      >
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> &nbsp; </span>}
          renderInput={(props) => <input {...props} />}
        />
        <button onClick={AxiosOTP}>submit</button>
      </div>
      <div
        className={`flex flex-col justify-center items-center ${
          showForm === true ? "block" : "hidden"
        }`}
      >
        form
      </div>
    </div>
  );
}

export default RegisterPhone;
