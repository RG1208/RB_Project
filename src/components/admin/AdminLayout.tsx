import type React from "react"
import { Sidebar } from "./Sidebar"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-secondary/10 p-6">{children}</main>
    </div>
  )
}

