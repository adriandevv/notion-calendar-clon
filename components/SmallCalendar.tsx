import { Button } from "./ui/button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGetMonth } from "@/app/hooks/useGetMonth";
import dayjs from "dayjs";
import { isCurrentDay } from "@/utils/calendar";
import { type Dayjs } from "dayjs";
import React from "react";
export const SmallCalendar = ({
  setMonthIndex,
  monthIndex,
  setDaySelected,
}: {
  setMonthIndex: (index: number) => void;
  monthIndex: number;
  daySelected: Dayjs | null;
  setDaySelected: (date: Dayjs) => void;
}) => {
  const {
    monthIndex: monthIndexSmall,
    setMonthIndex: setMontIndexSmall,
    currentMonth,
    isCurrentMonth,
  } = useGetMonth();
  const handleMonthChange = (index: number) => {
    setMontIndexSmall(index);
  };

  const handleGlobalMonthChange = (date: Date) => {
    if (!isCurrentMonth(date)) {
      setMonthIndex(dayjs(date).month());
      return;
    }
    setMonthIndex(monthIndexSmall);
  };

  React.useEffect(() => {
    setMontIndexSmall(monthIndex);
  }, [monthIndex]);

  return (
    <section className="w-56">
      <div className="flex justify-end">
        <section>
          <h1 className=" text-lg font-bold">
            {dayjs(new Date(dayjs().year(), monthIndexSmall)).format(
              "MMMM YYYY"
            )}
          </h1>
        </section>
        <Button
          variant="ghost"
          size="sm"
          className="size-8"
          onClick={() => handleMonthChange(monthIndexSmall - 1)}
        >
          <FaChevronUp />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="size-8"
          onClick={() => handleMonthChange(monthIndexSmall + 1)}
        >
          <FaChevronDown />
        </Button>
      </div>
      <div className="grid grid-cols-7 h-full text-xs mb-6">
        <div className="flex justify-center items-end">Sun</div>
        <div className="flex justify-center items-end">Mon</div>
        <div className="flex justify-center items-end">Tue</div>
        <div className="flex justify-center items-end">Wed</div>
        <div className="flex justify-center items-end">Thu</div>
        <div className="flex justify-center items-end">Fri</div>
        <div className="flex justify-center items-end">Sat</div>
      </div>

      <div className="grid grid-cols-7 h-full text-xs">
        {currentMonth.map((day: any) =>
          day.map((d: Dayjs, iter: number) => {
            return (
              <div
                key={iter}
                className={`flex justify-center p-1 rounded-full ${
                  isCurrentDay(d) ? "bg-red-500" : ""
                }`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`size-6 text-xs text-slate-500 ${
                    isCurrentMonth(d) ? "text-white" : ""
                  } ${isCurrentDay(d) ? "text-white" : ""}`}
                  onClick={() => {
                    handleGlobalMonthChange(d.toDate());
                    setDaySelected(d);
                  }}
                >
                  {dayjs(d).format("DD")}
                </Button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
