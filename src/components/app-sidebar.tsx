import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { Sidebar, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
    },
    {
      title: "My Album",
      url: "/my-album",
    },
    {
      title: "Event Settings",
      url: "#",
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0 w-48" {...props}>
      <SidebarHeader className="pt-16">
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarRail />
    </Sidebar>
  );
}
