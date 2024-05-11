import React from "react";
import PhoneInput from "react-phone-input-2";
import classes from "./MobileInput.module.css";
function MobileInput(props) {
  return (
    <div>
      <from className="flex flex-col justify-center items-center">
        <PhoneInput
          country={"ir"}
          value={props.phone}
          onChange={props.setPhone}
          autoFormat={true}
          required
          onlyCountries={["ir"]}
        />
        <button
          className={`${classes.button} dark:text-white`}
          type="submit"
          onClick={props.AxiosPhone}
        >
          submit
        </button>
      </from>
    </div>
  );
}

export default MobileInput;
