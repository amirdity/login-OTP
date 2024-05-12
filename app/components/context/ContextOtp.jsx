import React from "react";
import OtpInput from "react-otp-input";
import { useContext } from "react";
import { OtpContext } from "../LOGIN/RegisterPhone";
import classes from "./ContextMobile.module.css";
function ContextOtp() {
  const objectOtp = useContext(OtpContext);
  return (
    <>
      {objectOtp.buttonOtp && (
        <div className="flex flex-col justify-center items-center">
          <OtpInput
            value={objectOtp.otp}
            onChange={objectOtp.setOtp}
            numInputs={6}
            renderSeparator={<span> &nbsp; </span>}
            renderInput={(props) => <input {...props} />}
          />
          <button
            onClick={objectOtp.AxiosOTP}
            className={`${classes.button} dark:text-white`}
          >
            submit
          </button>
        </div>
      )}
    </>
  );
}
export default ContextOtp;