"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import "react-phone-input-2/lib/style.css";
import "./RegisterPhone.css";
import MobileInput from "../features/MobileInput";
import OTPInput from "../features/OTPInput";
import RegisterForm from "../features/form/RegisterForm";
import Cookies from "js-cookie";
function RegisterPhone() {
  //---------------- MOBILE INPUT-------------------
  const [phone, setPhone] = useState("");
  const [buttonPhone, setButtonPhone] = useState(true);
  // -------------------OTP INPUT-----------------------
  const [buttonOtp, setButtonOtp] = useState(false);
  const [otp, setOtp] = useState("");
  //--------------------JWT----------------------------
  const [showForm, setShowForm] = useState(false);
  const token = useRef("");
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
    axios
      .post(sendOtpUrl, api)
      .then((res) => {
        alert(res.data.message) & handleClick(res.data.message);
      })
      .catch(
        (err) =>
          console.log(err) &
          alert("در حال حاضر سرور از دسترس خارج شده ") &
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
    }
  }
  function AxiosOTP() {
    const verifyOTP = "http://192.168.8.101:4003/auth/login-verify-otp";
    const api = { mobile: `+${phone}`, otp_code: `${otp}` };
    axios
      .post(verifyOTP, api)
      .then(
        (res) =>
          alert(res.data.message) &
          Cookies.set("token", res.data.access_token.access_token, {
            expires: 7,
            secure: true,
          }) &
          AxiosJwt(res.data.access_token.access_token) &
          handleButtonOtp(res.data.message)
      )
      .catch((err) => console.log(err));
  }
  function handleButtonOtp(message) {
    if (message === "اعتبار سنجی کد یک بار مصرف با موفقیت انجام شد") {
      setButtonOtp(false);
    }
  }
  function AxiosJwt() {
    const token = Cookies.get("token");
    console.log(`Bearer ${token}`);
    axios
      .get("http://192.168.8.101:4003/customer/info", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(
        (res) =>
          alert("ورود موفقیت آمیز بود") &
          console.log(token) &
          setId(res.data.customer.id) &
          console.log(res) &
          registerOrNot(res.data.customer.email, res.data.customer.full_name)
      )
      .catch((err) => console.log(err));
  }
  function registerOrNot(email, full_name) {
    if (email === null) {
      setShowForm(true);
    } else {
      alert(` ${full_name} عزیز خوش آمدید `);
    }
  }
  function AxiosRegisterForm() {
    const token = Cookies.get("token");
    const api = {
      customer_id: `${id}`,
      full_name: `${name}`,
      birth_data: `${birthDate}`,
      gender: `${gender}`,
      email: `${email}`,
      landline: `${landline}`,
    };
    axios
      .post("http://192.168.8.101:4003/customer/completion-info", api, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res) & alert(res.data.message))
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
          setName={setName}
          name={name}
          setBirthDate={setBirthDate}
          birthDate={birthDate}
          setGender={setGender}
          gender={gender}
          setEmail={setEmail}
          email={email}
          setLandline={setLandline}
          landline={landline}
          AxiosRegisterForm={AxiosRegisterForm}
        />
      )}
    </div>
  );
}
export default RegisterPhone;
