"use client";
import { Calendar } from "@/components/Calendar";
import { ToolsHeader } from "@/components/ToolsHeader";
import React from "react";
import { useGetMonth } from "./hooks/useGetMonth";
import SideBar from "@/components/SideBar";
import { SmallCalendar } from "@/components/SmallCalendar";
export default function Home() {
  const { monthIndex, setMonthIndex, currentMonth, isCurrentMonth, daySelected, setDaySelected } =
    useGetMonth();

    return (
      <main className="min-h-screen min-w-screen flex">
        <div className="w-96 p-5 my-11">
        <SmallCalendar setMonthIndex={setMonthIndex} monthIndex={monthIndex} daySelected={daySelected} setDaySelected={setDaySelected} />
        </div>
        <section className="flex flex-col w-full ">
          <ToolsHeader setMonthIndex={setMonthIndex} monthIndex={monthIndex} />
          <Calendar   currentMonth={currentMonth} isCurrentMonth={isCurrentMonth} daySelected={daySelected} />
        </section>
        <SideBar />
      </main>
    );
  }