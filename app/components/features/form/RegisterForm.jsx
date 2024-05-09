import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
function RegisterForm(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col">
        <lable>نام و نام خانوادگی :</lable>
        <input
          type="text"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          required
        />
        <span> لطفا نام خود را وارد کنید</span>
        <lable> تاریخ تولد :</lable>
        <DatePicker
          value={props.birthDate}
          onChange={props.setBirthDate}
          calendarType="gregory"
          locale="fa"
        />
        {/* <input type="date"  required value={props.birthDate} onChange={(e)=>props.setBirthDate( e.target.value)} /> */}
        <span> لطفا اینجا را پر کنید</span>
        <lable> جنسیت :</lable>
        <input
          required
          value={props.gender}
          onChange={(e) => props.setGender(e.target.value)}
        />

        <span> لطفا اینجا را پر کنید</span>
        <lable> پست الکترونیکی:</lable>
        <input
          required
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <span> لطفا اینجا را پر کنید</span>
        <lable> تلفن منزل:</lable>
        <input
          required
          value={props.landline}
          onChange={(e) => props.setLandline(e.target.value)}
        />
        <span> لطفا اینجا را پر کنید</span>
      </form>
      <button onClick={props.AxiosRegisterForm}>submit</button>
    </div>
  );
}
export default RegisterForm;
