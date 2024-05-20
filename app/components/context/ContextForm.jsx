"use client";
import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useContext } from "react";
import { FormContext } from "../LOGIN/RegisterPhone";
import Cookies from "js-cookie";
import axios from "axios";
import classes from "./ContextMobile.module.css";
import "./ContextForm.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

function ContextForm() {
  const [date, setDate] = useState("");
  const [fixDate, setFixDate] = useState("");
  const [focused, setFocused] = useState(false);
  function handleFocus(e) {
    setFocused(true);
  }

  useEffect(() => {
    setFixDate(`${date.year}/${date.month}/${date.day}`), [date];
  });
  function handleForm(e) {
    e.preventDefault();
    AxiosRegisterForm();
    // objectForm.AxiosRegisterForm();
  }
  function AxiosRegisterForm() {
    const token = Cookies.get("token");
    const api = {
      customer_id: `${objectForm.id}`,
      full_name: `${objectForm.name}`,
      birth_data: `${fixDate}`,
      gender: `${objectForm.gender}`,
      email: `${objectForm.email}`,
      landline: `${objectForm.landline}`,
    };
    axios
      .post("http://192.168.8.103:4003/customer/completion-info", api, {
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
        <div className="flex flex-col justify-center items-center ">
          <form className="flex flex-col" onSubmit={handleForm}>
            <div className="h-20 ">
           
              <input
                type="text "
                value={objectForm.name}
                onChange={(e) => objectForm.setName(e.target.value)}
                required
                pattern="^[\u0600-\u06FF\s]{5,25}$"
                className="h-8 p-3 rounded-lg"
                onBlur={handleFocus}
                focused={focused.toString()}
              />
                 <lable className="p-2">: نام و نام خانوادگی </lable>
              <span> "لطفا نام خود را به درستی وارد کنید "</span>
            </div>
            <div className="h-20 mt-4">
             
              <select
                multiple={false}
                value={objectForm.gender}
                onChange={(e) => objectForm.setGender(e.target.value)}
                className="w-[200px] p-1 rounded-lg mr-[66px]"
              >
                <option value="مرد">مرد</option>
                <option value="زن">زن</option>
              </select>
              <lable className="p-2">: جنسیت </lable>
              <span> لطفا اینجا را پر کنید</span>
            </div>
            <div className="h-20">
            
              <input
              id="1"
              type="email"
                required
                value={objectForm.email}
                onChange={(e) => objectForm.setEmail(e.target.value)}
                className="h-8 p-3 rounded-lg mr-[10px]"
                onBlur={handleFocus}
                focused={focused.toString()}
              />
                <lable className="p-2">: پست الکترونیکی   </lable>
              <span> لطفا اینجا را پر کنید</span>
            </div>
            <div className="h-20">
             
              <input
              type="tel"
                required
                value={objectForm.landline}
                onChange={(e) => objectForm.setLandline(e.target.value)}
                className="h-8 p-3 rounded-lg mr-[55px]"
                onBlur={handleFocus}
                focused={focused.toString()}
                pattern="^[0-9]{11}$"
              />
               <lable className="p-2">: تلفن منزل  </lable>
              <span> لطفا اینجا را پر کنید</span>
            </div>
            <div className="">
              <lable className="p-3 "> تاریخ تولد :</lable>
              <Calendar
                value={date}
                onChange={setDate}
                shouldHighlightWeekends
                locale="fa"
              />
              <span> لطفا اینجا را پر کنید</span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={objectForm.AxiosRegisterForm}
                className={classes.button}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default ContextForm;
