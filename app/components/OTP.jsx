"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

function OTP() {
  const [otp, setOtp] = useState("");
  return (
    <div className="hidden">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span> &nbsp; </span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
}

export default OTP;
