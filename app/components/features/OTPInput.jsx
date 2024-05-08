import React from "react";
import OtpInput from "react-otp-input";
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
      <button onClick={props.AxiosOTP}>submit</button>
    </div>
  );
}

export default OTPInput;
