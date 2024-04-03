"use client";
import { Calendar } from "@/components/Calendar";
import { ToolsHeader } from "@/components/ToolsHeader";
import React from "react";
import { useGetMonth } from "./hooks/useGetMonth";
export default function Home() {
  const { monthIndex, setMonthIndex, currentMonth, isCurrentMonth } = useGetMonth();

  return (
    <main>
      <ToolsHeader setMonthIndex={setMonthIndex} monthIndex={monthIndex}  />
      <Calendar  currentMonth={currentMonth} isCurrentMonth={isCurrentMonth}/>
    </main>
  );
}
