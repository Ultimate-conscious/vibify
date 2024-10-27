import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


const pastSessions = [
    { id: 1, name: "Friday Night Jams", date: "2024-10-18", duration: "2h 15m", participants: 12 },
    { id: 2, name: "Chill Weekends", date: "2024-10-20", duration: "1h 45m", participants: 8 },
    { id: 3, name: "Midweek Melodies", date: "2024-10-22", duration: "1h 30m", participants: 15 },
]

const PastJammingSessions = () => {

    return (
        <Card className="mt-6">
            <CardHeader>
              <CardTitle>Past Jamming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Session Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Participants</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pastSessions.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell className="font-medium">{session.name}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.duration}</TableCell>
                      <TableCell>{session.participants}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
    )
}

export default PastJammingSessions