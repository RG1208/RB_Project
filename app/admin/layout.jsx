"use client"

import { Sidebar } from "@/components/admin/sidebar"

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-secondary/10 p-6">{children}</main>
    </div>
  )
}

