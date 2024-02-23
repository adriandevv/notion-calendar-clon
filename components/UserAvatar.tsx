"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { LuLogOut } from "react-icons/lu";
import { HiMiniCommandLine } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";

export const UserAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>adrianValenciaHernandez</DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs text-gray-400">
          adrian15996@gmail.com
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <HiMiniCommandLine className="mr-2" />
          <span>Command menu</span>
          <DropdownMenuShortcut>ctrl K</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoSettings className="mr-2" />
          <span>Settings</span>
          <DropdownMenuShortcut>G then S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MdManageAccounts className="mr-2" />
          <span>Manage calendar accounts</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LuLogOut className="mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
