import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Music, Users, Calendar, Clock, Link as LinkIcon } from 'lucide-react'

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

const pastSessions = [
  { id: 1, name: "Friday Night Jams", date: "2024-10-18", duration: "2h 15m", participants: 12 },
  { id: 2, name: "Chill Weekends", date: "2024-10-20", duration: "1h 45m", participants: 8 },
  { id: 3, name: "Midweek Melodies", date: "2024-10-22", duration: "1h 30m", participants: 15 },
]

export function AdminHostPageComponent() {
  const [roomName, setRoomName] = useState('')
  const [playlistUrl, setPlaylistUrl] = useState('')

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Room created:', roomName)
    setRoomName('')
  }

  const handleLinkPlaylist = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Playlist linked:', playlistUrl)
    setPlaylistUrl('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Create Room Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Music className="mr-2" />
                  Create Jam Room
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateRoom}>
                  <Input
                    type="text"
                    placeholder="Enter room name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    className="mb-4"
                  />
                  <Button type="submit" className="w-full">Create Room</Button>
                </form>
              </CardContent>
            </Card>

            {/* Link Spotify Playlist Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LinkIcon className="mr-2" />
                  Link Spotify Playlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLinkPlaylist}>
                  <Input
                    type="url"
                    placeholder="Paste Spotify playlist URL"
                    value={playlistUrl}
                    onChange={(e) => setPlaylistUrl(e.target.value)}
                    className="mb-4"
                  />
                  <Button type="submit" className="w-full">Link Playlist</Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Stats Card */}
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
          </div>

          {/* Listener Activity Chart */}
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

          {/* Past Jamming Sessions Table */}
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
        </div>
      </main>
    </div>
  )
}