"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Users, Settings, AlertCircle, Bell, LogOut } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: BarChart3,
    href: "/admin",
  },
  {
    label: "Incidents",
    icon: AlertCircle,
    href: "/admin/incidents",
  },
  {
    label: "Users",
    icon: Users,
    href: "/admin/users",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-secondary/20 text-secondary-foreground">
      <div className="px-3 py-2">
        <Link href="/admin" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "bg-primary/10" : "",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3 py-2">
        <Link
          href="/login"
          className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 rounded-lg transition"
        >
          <div className="flex items-center flex-1">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </div>
        </Link>
      </div>
    </div>
  )
}

