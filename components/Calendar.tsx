"use client";
import React from "react";
import { Month } from "./Month";

export const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <section className="h-full w-full">
        <div className="grid grid-cols-7">
          {days.map((day, iter) => (
            <div key={iter} className="flex justify-center items-end">
              {day}
            </div>
          ))}
        </div>
        <Month />
      </section>
    </>
  );
};
