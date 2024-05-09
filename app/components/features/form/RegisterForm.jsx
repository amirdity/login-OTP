import React from "react";
function RegisterForm(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <form  className="flex flex-col">
        <lable>نام و نام خانوادگی :</lable>
        <input value={props.name} onChange={(e)=> props.setName(e.target.value)} />
        <lable> تاریخ تولد :</lable>
        <input value={props.birthDate} onChange={(e)=>props.setBirthDate(e.target.value)} />
        <lable> جنسیت :</lable>
        <input value={props.gender} onChange={(e)=>props.setGender(e.target.value)} />
        <lable> پست الکترونیکی:</lable>
        <input value={props.email} onChange={(e)=>props.setEmail(e.target.value)} />
        <lable> تلفن منزل:</lable>
        <input value={props.landline} onChange={(e)=>props.setLandline(e.target.value)} />
      </form>
      <button onClick={props.AxiosRegisterForm}>submit</button>
    </div>
  );
}
export default RegisterForm;