import React from "react";
import { getMonth } from "@/utils/calendar";
import dayjs from "dayjs";
import { type Dayjs } from "dayjs";
export const useGetMonth = () => {
  const [monthIndex, setMonthIndex] = React.useState(dayjs().month());
  const [currentMonth, setcurrentMonth] = React.useState(getMonth(monthIndex));
  const [daySelected, setDaySelected] = React.useState<Dayjs | null>(null);


  function isCurrentMonth(date: Dayjs) {

    const month = dayjs(date).month();
    if(monthIndex < 0){
      if((Math.abs(monthIndex)%12)===0){
        return month === 0;
      }
      return month ===  12-(Math.abs(monthIndex)%12);
    }
    return month === (monthIndex%12);
  }

  React.useEffect(() => {

    setcurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return { monthIndex, setMonthIndex, currentMonth, isCurrentMonth, daySelected, setDaySelected};
};
