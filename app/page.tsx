"use client";
import { Calendar } from "@/components/Calendar";
import { ToolsHeader } from "@/components/ToolsHeader";
import React from "react";
import { useGetMonth } from "./hooks/useGetMonth";
import SideBar from "@/components/SideBar";
import { SmallCalendar } from "@/components/SmallCalendar";
export default function Home() {
  const { monthIndex, setMonthIndex, currentMonth, isCurrentMonth } =
    useGetMonth();

    return (
      <main className="min-h-screen min-w-screen flex">
        <section className="w-96 my-28">
        <SmallCalendar />
        </section>
        <section className="flex flex-col w-full relative ">
          <ToolsHeader setMonthIndex={setMonthIndex} monthIndex={monthIndex} />
          <Calendar   currentMonth={currentMonth} isCurrentMonth={isCurrentMonth} />
        </section>
        <SideBar />
      </main>
    );
  }