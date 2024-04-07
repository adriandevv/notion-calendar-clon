"use client";
import React, { useEffect } from "react";
import { Month } from "./Month";
import { type Dayjs } from "dayjs";

export const Calendar = ({
  currentMonth,
  isCurrentMonth,
  daySelected,
}: {
  currentMonth: Dayjs[];
  isCurrentMonth: boolean;
  daySelected: Dayjs;
}) => {
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
      <Month currentMonth={currentMonth} isCurrentMonth={isCurrentMonth} daySelected={daySelected} />
    </section>
  );
};
