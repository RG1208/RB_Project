import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const incidents = [
  {
    id: 1,
    type: "Medical",
    location: "123 Main St",
    status: "Active",
    time: "2 mins ago",
  },
  {
    id: 2,
    type: "Fire",
    location: "456 Oak Ave",
    status: "In Progress",
    time: "5 mins ago",
  },
  {
    id: 3,
    type: "Security",
    location: "789 Pine Rd",
    status: "Resolved",
    time: "10 mins ago",
  },
]

export function RecentIncidents() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {incidents.map((incident) => (
          <TableRow key={incident.id}>
            <TableCell>{incident.type}</TableCell>
            <TableCell>{incident.location}</TableCell>
            <TableCell>
              <Badge
                variant={
                  incident.status === "Active"
                    ? "destructive"
                    : incident.status === "In Progress"
                      ? "default"
                      : "secondary"
                }
              >
                {incident.status}
              </Badge>
            </TableCell>
            <TableCell>{incident.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

