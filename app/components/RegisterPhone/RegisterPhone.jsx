"use client";
import axios from "axios";
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import "./RegisterPhone.css";
import MobileInput from "../features/MobileInput";
import OTPInput from "../features/OTPInput";
import RegisterForm from "../features/RegisterForm";
function RegisterPhone() {
  //---------------- MOBILE INPUT-------------------
  const [phone, setPhone] = useState("");
  const [buttonPhone, setButtonPhone] = useState(true);
  // -------------------OTP INPUT-----------------------
  const [buttonOtp, setButtonOtp] = useState(false);
  const [otp, setOtp] = useState("");
  //--------------------JWT----------------------------
  const [showForm, setShowForm] = useState(false);
  const [token, setToken] = useState("");
  // ---------------------FORM------------------------------
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [landline, setLandline] = useState("");
  function AxiosPhone() {
    setButtonPhone(false);
    const sendOtpUrl = "http://192.168.8.101:4003/auth/login-send-otp";
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
    const verifyOTP = "http://192.168.8.101:4003/auth/login-verify-otp";
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
  function AxiosJwt(token) {
    setToken(token);
    axios
      .get("http://192.168.8.101:4003/customer/info", {
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
  function AxiosRegisterForm() {
    const api = {
      customer_id: `${id}`,
      full_name: `${name}`,
      birth_data: `${birthDate}`,
      gender: [`${gender}`],
      email: `${email}`,
      landline: `${landline}`,
    };
    axios
      .post("http://192.168.8.101:4003/customer/info", api, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      {buttonPhone && (
        <MobileInput
          setPhone={setPhone}
          phone={phone}
          AxiosPhone={AxiosPhone}
        />
      )}
      {buttonOtp && <OTPInput otp={otp} setOtp={setOtp} AxiosOTP={AxiosOTP} />}
      {showForm && (
        <RegisterForm
          setId={setId}
          setName={setName}
          setBirthDate={setBirthDate}
          setGender={setGender}
          setEmail={setEmail}
          setLandline={setLandline}
          AxiosRegisterForm={AxiosRegisterForm}
        />
      )}
    </div>
  );
}
export default RegisterPhone;
