import React from "react";
import OtpInput from "react-otp-input";
import classes from "./MobileInput.module.css";
function OTPInput(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <OtpInput
        value={props.otp}
        onChange={props.setOtp}
        numInputs={6}
        renderSeparator={<span> &nbsp; </span>}
        renderInput={(props) => <input {...props} />}
      />
      <button
        onClick={props.AxiosOTP}
        className={`${classes.button} dark:text-white`}
      >
        submit
      </button>
    </div>
  );
}

export default OTPInput;
