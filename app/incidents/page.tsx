"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

// Mock data for incidents
const mockIncidents = [
  {
    id: 1,
    type: "Medical",
    location: "123 Main St",
    status: "Active",
    priority: "High",
    reportedAt: "2024-02-26 10:30 AM",
  },
  {
    id: 2,
    type: "Fire",
    location: "456 Oak Ave",
    status: "In Progress",
    priority: "High",
    reportedAt: "2024-02-26 10:15 AM",
  },
  {
    id: 3,
    type: "Security",
    location: "789 Pine Rd",
    status: "Resolved",
    priority: "Medium",
    reportedAt: "2024-02-26 09:45 AM",
  },
  {
    id: 4,
    type: "Accident",
    location: "321 Elm St",
    status: "Active",
    priority: "Medium",
    reportedAt: "2024-02-26 09:30 AM",
  },
]

export default function IncidentsPage() {
  const [incidents] = useState(mockIncidents)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-red-500"
      case "in progress":
        return "bg-yellow-500"
      case "resolved":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Active Incidents</CardTitle>
          <CardDescription>Monitor and respond to ongoing emergency situations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl">4</CardTitle>
                <CardDescription>Total Incidents</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl text-red-500">2</CardTitle>
                <CardDescription>High Priority</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl text-yellow-500">2</CardTitle>
                <CardDescription>In Progress</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl text-green-500">1</CardTitle>
                <CardDescription>Resolved</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Reported At</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incidents.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell>{incident.type}</TableCell>
                  <TableCell>{incident.location}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(incident.status)}>{incident.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(incident.priority)}>{incident.priority}</Badge>
                  </TableCell>
                  <TableCell>{incident.reportedAt}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

