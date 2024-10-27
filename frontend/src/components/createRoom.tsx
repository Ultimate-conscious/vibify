import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Music, Users, Calendar, Clock, Link as LinkIcon, List } from 'lucide-react'
import QuickStats from './quickStats'
import ListnerActivity from './listnerActivity'
import PastJammingSessions from './pastJammingSessions'


const CreeateRoom = () => {

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
        <>
            <Card>
            <CardHeader>
            <CardTitle className="flex items-center">
                <Music className="mr-2" />
                Create Jam Room
            </CardTitle>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleCreateRoom}>
                <div className='flex'>
                    <Input
                    type="text"
                    placeholder="Enter room name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    className="mb-4"
                    />
                    <Input
                    type="url"
                    placeholder="Paste Spotify playlist URL"
                    value={playlistUrl}
                    onChange={(e) => setPlaylistUrl(e.target.value)}
                    className="mb-4"
                    />
                </div>
                <Button type="submit" className="w-full">Create Room</Button>
            </form>
            </CardContent>
        </Card>

        {/* Link Spotify Playlist Card */}
        {/* <Card>
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
        </Card> */}
      </>
    )
}

export default CreeateRoom