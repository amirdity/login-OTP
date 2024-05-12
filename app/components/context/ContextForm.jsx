import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useContext } from "react";
import { FormContext } from "../LOGIN/RegisterPhone";
import Cookies from "js-cookie";
import axios from "axios";
function ContextForm() {
  function handleForm(e) {
    e.preventDefault();
    AxiosRegisterForm()
    // objectForm.AxiosRegisterForm();
  }
  function AxiosRegisterForm() {
    const token = Cookies.get("token");
    const api = {
      customer_id: `${objectForm.id}`,
      full_name: `${objectForm.name}`,
      birth_data: `${objectForm.birthDate}`,
      gender: `${objectForm.gender}`,
      email: `${objectForm.email}`,
      landline: `${objectForm.landline}`,
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
  const objectForm = useContext(FormContext);
  return (
    <>
      {objectForm.showForm && (
        <div className="flex flex-col justify-center items-center">
          <form className="flex flex-col" onSubmit={handleForm}>
            <lable>نام و نام خانوادگی :</lable>
            <input
              type="text"
              value={objectForm.name}
              onChange={(e) => objectForm.setName(e.target.value)}
              required
            />
            <span> لطفا نام خود را وارد کنید</span>
            <lable> تاریخ تولد :</lable>
            <DatePicker
              value={objectForm.birthDate}
              onChange={objectForm.setBirthDate}
              calendarType="gregory"
              locale="fa"
            />
            <span> لطفا اینجا را پر کنید</span>
            <lable> جنسیت :</lable>
            <input
              required
              value={objectForm.gender}
              onChange={(e) => objectForm.setGender(e.target.value)}
            />
            <span> لطفا اینجا را پر کنید</span>
            <lable> پست الکترونیکی:</lable>
            <input
              required
              value={objectForm.email}
              onChange={(e) => objectForm.setEmail(e.target.value)}
            />
            <span> لطفا اینجا را پر کنید</span>
            <lable> تلفن منزل:</lable>
            <input
              required
              value={objectForm.landline}
              onChange={(e) => objectForm.setLandline(e.target.value)}
            />
            <span> لطفا اینجا را پر کنید</span>
            <button type="submit" onClick={objectForm.AxiosRegisterForm}>submit</button>
          </form>
        </div>
      )}
    </>
  );
}
export default ContextForm;