import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Music, Users } from "lucide-react"


const QuickStats = () => {

    return (
        <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Users className="mr-2 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">Total Users</p>
                      <p className="text-2xl font-bold">1,234</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Music className="mr-2 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Active Rooms</p>
                      <p className="text-2xl font-bold">17</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-500">Sessions Today</p>
                      <p className="text-2xl font-bold">42</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-500">Avg. Session</p>
                      <p className="text-2xl font-bold">1h 23m</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
    )
}

export default QuickStats;