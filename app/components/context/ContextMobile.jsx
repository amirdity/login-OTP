import React, { useContext } from "react";
import { MobileContext } from "../LOGIN/RegisterPhone";
import PhoneInput from "react-phone-input-2";
import classes from "./ContextMobile.module.css";
import "react-phone-input-2/lib/style.css";
function ContextMobile() {
  const objectMobile = useContext(MobileContext);
  return (
    <div>
      {objectMobile.buttonPhone && (
        <div>
          <from className="flex flex-col justify-center items-center">
            <PhoneInput
              country={"ir"}
              value={objectMobile.phone}
              onChange={objectMobile.setPhone}
              autoFormat={true}
              required
              onlyCountries={["ir"]}
            />
            <button
              className={`${classes.button} dark:text-white`}
              type="submit"
              onClick={objectMobile.AxiosPhone}
            >
              submit
            </button>
          </from>
        </div>
      )}
    </div>
  );
}
export default ContextMobile;