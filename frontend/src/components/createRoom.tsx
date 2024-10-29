import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music } from 'lucide-react'
import { socket } from '@/socket'
import { useNavigate } from 'react-router-dom'



const CreeateRoom = () => {

    const [roomName, setRoomName] = useState('')
    const [playlistUrl, setPlaylistUrl] = useState('')
    const navigate = useNavigate()

    const handleCreateRoom = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Room created:', roomName)
        //const roomId = socket.emit('create-room', { roomName });
        // socket.emit('create-room', { roomName })
        // socket.emit('add-song', { songUrl: playlistUrl })
        //navigate('/room/' + roomId)
        setRoomName('')

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
                <div className='flex gap-2'>
                    <Input
                    type="text"
                    placeholder="Enter room name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    className="mb-4"
                    />
                    <Input
                    type="url"
                    placeholder="What's the first song's url?"
                    value={playlistUrl}
                    onChange={(e) => setPlaylistUrl(e.target.value)}
                    className="mb-4"
                    />
                </div>
                <Button type="submit" className="w-full">Create Room</Button>
            </form>
            </CardContent>
        </Card>
      </>
    )
}

export default CreeateRoom