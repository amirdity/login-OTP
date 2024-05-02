"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function RegisterPhone() {
  const [phone, setPhone] = useState("09059850877");

  function Axios() {
    // setPhone(phone);
    const api = { mobile: `${phone}` };
    const finalApi = JSON.stringify(api)
    console.log(phone);
    console.log(api);
    console.log(finalApi)
    axios
      .post("http://192.168.8.102:3003/auth/login-send-otp", finalApi)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <from>
        <PhoneInput
          country={"ir"}
          // value={phone}
          // onChange={setPhone}
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
