"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
function DateePicker() {
  const [date, setDate] = useState("");
  const [api, setApi] = useState("");
  useEffect(() => {
    setApi(`${date.year}/${date.month}/${date.day}`), [date];
  });
  console.log(api);
  return (
    <div>
      <Calendar
        value={date}
        onChange={setDate}
        shouldHighlightWeekends
        locale="fa"
      />
    </div>
  );
}

export default DateePicker;
