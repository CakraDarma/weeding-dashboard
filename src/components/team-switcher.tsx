import * as React from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: string;
    plan: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-x-2 px-1.5">
          <Image
            src={activeTeam.logo || "/sample-img.png"}
            alt="img"
            width={30}
            height={30}
          />
          {/* <div className="flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
          </div> */}
          <span className="truncate font-semibold">{activeTeam.name}</span>
          <ChevronDown className="opacity-50 text-primary" />
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
    // <SidebarMenu>
    //   <SidebarMenuItem>
    //   </SidebarMenuItem>
    // </SidebarMenu>
  );
}
