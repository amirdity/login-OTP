"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
function OTP() {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const verifyOTP = "http://192.168.8.102:4003/auth/login-verify-otp";
  const api = { mobile: `+${phone}`, otp_code: `${otp}` };
  function Axios() {
    console.log(phone)
    console.log(otp)
    axios.post(verifyOTP,api).then(res=> console.log(res)).catch(err=>console.log(err))
  }

  return (
    <div className="">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span> &nbsp; </span>}
        renderInput={(props) => <input {...props} />}
      />
      <button onClick={Axios}>submit</button>
    </div>
  );
}

export default OTP;
