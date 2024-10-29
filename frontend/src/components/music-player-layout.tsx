import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Music, User } from 'lucide-react'
import CurrentlyPlayingCard from './currentlyPlayingCard'
import SongQueue from './songQueue'
import SideChat from './sideChat'
import { socket } from '@/socket'
import { useParams } from 'react-router-dom'

export function MusicPlayerLayoutComponent() {
  const [songUrl, setSongUrl] = useState('');
  // define in use effect how to fetch the song list first time
  //const [songList,setSongList] = useState([]);
  const pathParams = useParams();

  useEffect(()=>{
    console.log(pathParams.roomId);
    // socket.emit("join-room", {roomId: pathParams.roomId})
    // socket.on("add-join-song-queue",(data)=>{
    //     console.log(data);
    // })
    //socket.on("someone-upvoted-song",(data)=>{
    //      // add a state array of songs which can be updates on this event
    //     console.log(data)
    //})
    // return ()=>{
    //   socket.off("add-join-song-queue")
    //   socket.off("someone-upvoted-song")
    // }
  },[])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic to add song to queue would go here
    //socket.emit('add-song', {songUrl})
    console.log('Song URL submitted:', songUrl)
    setSongUrl('')
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-800">Vibify</h1>
            <nav className="flex space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <Music className="mr-2 h-4 w-4" />
                Discover
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-hidden container mx-auto px-4 py-6">
        <div className="flex h-full gap-6">
          {/* Currently playing and queue */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Currently playing */}
            <CurrentlyPlayingCard />

            {/* Song queue */}
            <SongQueue/>

            {/* Add song form */}
            <form onSubmit={handleSubmit} className="mt-6 flex space-x-2">
              <Input
                type="url"
                placeholder="Paste song URL here"
                value={songUrl}
                onChange={(e) => setSongUrl(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">Add to Queue</Button>
            </form>
          </div>

          {/* Chat sidebar */}
          <SideChat />
        </div>
      </main>
    </div>
  )
}