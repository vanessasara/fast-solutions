"use client"

import * as React from "react"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { data } from "@/lib/data";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  // Update navigation items with active state based on current pathname
  const navMainWithActive = data.navMain.map(item => ({
    ...item,
    isActive: pathname === item.url
  }))

  const navSecondaryWithActive = data.navSecondary.map(item => ({
    ...item,
    isActive: pathname === item.url
  }))

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-2 py-2 hover:bg-sidebar-accent rounded-md transition-colors">
          <div className="relative flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground overflow-hidden">
            <Image 
              src='/logoImage.png'
              fill
              alt='Fast Solutions Logo'
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Fast solutions</span>
            <span className="text-xs text-muted-foreground">Management</span>
          </div>
        </Link>
        <Separator className="my-2" />
        <div className="px-2">
          <OrganizationSwitcher
            hidePersonal={false}
            appearance={{
              elements: {
                rootBox: "w-full",
                organizationSwitcherTrigger: "w-full justify-start px-2",
              }
            }}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainWithActive} />
        <NavSecondary items={navSecondaryWithActive} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-2 py-2">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8",
              }
            }}
            afterSignOutUrl="/"
          />
          <div className="flex flex-1 flex-col gap-0.5 leading-none text-sm">
            <span className="font-medium">Account</span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
