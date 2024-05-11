import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useContext } from "react";
import { FormContext } from "../LOGIN/RegisterPhone";
function ContextForm() {
  const objectForm = useContext(FormContext);
  return (
    <>
      {objectForm.showForm && (
        <div className="flex flex-col justify-center items-center">
          <form className="flex flex-col">
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
            {/* <input type="date"  required value={props.birthDate} onChange={(e)=>props.setBirthDate( e.target.value)} /> */}
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
          </form>
          <button onClick={objectForm.AxiosRegisterForm}>submit</button>
        </div>
      )}
    </>
  );
}

export default ContextForm;
