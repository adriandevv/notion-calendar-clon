import React from "react";
import dayjs from "dayjs";
import { type Dayjs } from "dayjs";
import { isCurrentDay } from "@/utils/calendar";

export const Month = ({currentMonth ,isCurrentMonth}) => {
  const checkCurrentMonth = (date: Dayjs) => {
    let day = dayjs(date).format("dddd");
    let styles = `border border-neutral-600  bg-gray-850 flex justify-end p-1 transition-all duration-300 ease-in-out`;

    if (day === "Sunday" || day === "Saturday") {
      styles += ` bg-MF`;
    }
    if (isCurrentDay(date) === true) {
      styles += ` bg-today`;
    }
    
    if (isCurrentMonth(date) === false) {
      styles += " border-neutral-800 text-neutral-500";
    }

    return styles;
  };
  
  return (
    <div className="grid grid-cols-7 grid-rows-6 min-h-screen ">
      {currentMonth.map((day: any) =>
        day.map((d:Dayjs, iter: number) => {
          return (
            <div key={iter} className={checkCurrentMonth(d)}>
              <span className=" font-bold text-xs text-center mr-1">
              {dayjs(d).format("DD") === `01`
                  ? `${dayjs(d).format("MMMM")} `
                  : ` `}
              </span>
              <span
                className={
                  isCurrentDay(d)
                    ? "bg-red-600 rounded-sm h-4 w-auto text-xs text-center"
                    : "h-4 text-center  w-auto text-xs  hover:bg-slate-500 cursor-default"
                }
              >
                
                {dayjs(d).format("DD")}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};
