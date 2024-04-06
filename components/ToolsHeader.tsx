"use client";

import React from "react";
import { UserAvatar } from "./UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import dayjs from "dayjs";


export const ToolsHeader = ({monthIndex, setMonthIndex}) => {
const actualMonth =() =>{
  setMonthIndex(dayjs().month());
};
  


const handleMonthChange = (index: number) => {
  setMonthIndex(index);
}

  return (
    <section className=" shrink flex justify-end items-center w-full p-2 ">
      <section>
        <h1 className="text-2xl font-bold">{dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}</h1>
      </section>
      <div className="flex justify-evenly w-1/4">

        <UserAvatar />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Month</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Day</DropdownMenuItem>
            <DropdownMenuItem>Week</DropdownMenuItem>
            <DropdownMenuItem>Month</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between">
              Number of days <FaChevronRight />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between">
              View settings <FaChevronRight />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={actualMonth} variant="outline">Day</Button>
        <div>
          <Button variant="ghost" size="icon" onClick={()=>handleMonthChange(monthIndex-1)}>
            <FaChevronUp />
          </Button>
          <Button variant="ghost" size="icon" onClick={()=>handleMonthChange(monthIndex+1)}>
            <FaChevronDown />
          </Button>
        </div>
      </div>
    </section>
  );
};
