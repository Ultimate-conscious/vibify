import { Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// Mock data for charts and tables
const sessionData = [
    { name: 'Monday', listeners: 45 },
    { name: 'Tuesday', listeners: 52 },
    { name: 'Wednesday', listeners: 49 },
    { name: 'Thursday', listeners: 63 },
    { name: 'Friday', listeners: 75 },
    { name: 'Saturday', listeners: 82 },
    { name: 'Sunday', listeners: 70 },
]


const ListnerActivity = () => {

    return (
        <Card className="mt-6">
            <CardHeader>
              <CardTitle>Listener Activity (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sessionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="listeners" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
    )
}

export default ListnerActivity