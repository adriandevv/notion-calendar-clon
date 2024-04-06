"use client";
import React, { useEffect } from "react";
import { Month } from "./Month";

export const Calendar = ({ currentMonth, isCurrentMonth }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section className="h-5/6 ">
      <div className="grid grid-cols-7">
        {days.map((day, iter) => (
          <div key={iter} className="flex justify-center items-end">
            {day}
          </div>
        ))}
      </div>
      <Month currentMonth={currentMonth} isCurrentMonth={isCurrentMonth} />
    </section>
  );
};
