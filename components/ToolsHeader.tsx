"use client";

import React from "react";
import { UserAvatar } from "./UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const ToolsHeader = () => {
  return (
    <section className="flex justify-end items-center w-full p-2 ">
      <div className="flex justify-evenly w-1/4">
        <UserAvatar />
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
                Button
            </Button>
            </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>adrianValenciaHernandez</DropdownMenuLabel>
            <DropdownMenuLabel className="text-xs">adrian15996@gmail.com</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};
