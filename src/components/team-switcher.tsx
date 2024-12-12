import * as React from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function TeamSwitcher({}: {
  teams: {
    name: string;
    logo: string;
    plan: string;
  }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-x-2 px-1.5">
          <Image src={"/sample-img.png"} alt="img" width={30} height={30} />
          <span className="text-sm">Dara & Arifin Weddings</span>
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
