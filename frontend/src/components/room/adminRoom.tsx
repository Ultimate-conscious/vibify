import { MessageSquare, Music, User } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme/mode-toggle";
import CurrentSongCard from "./currentSongCard";
import { Input } from "../ui/input";
import SongQueue from "./songQueue";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const AdminRoomComponent = () => {

    const [songUrl, setSongUrl] = useState('');
  const pathParams = useParams();

  useEffect(()=>{
    console.log(pathParams.roomId);
    // socket.emit("join-room", {roomId: pathParams.roomId})
    // return ()=>{
    //   socket.emit("leave-room", {roomId: pathParams.roomId})
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
        <div>
            <div className='flex flex-col h-screen w-full bg-background text-foreground'>
      <header className="flex w-full items-center justify-between px-4 p-2 bg-background border-b">
        <h1 className="text-3xl font-bold">
          Vibify
        </h1>
        <nav className="hidden md:block">
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
          <ModeToggle/>
        </nav>
      </header>
      <div className="flex md:flex-row flex-col h-full w-full">
        <aside className="md:w-2/5 w-full p-4 pt-6 border-r">
          <CurrentSongCard/>
          <form onSubmit={handleSubmit} className="mt-6 flex space-x-2 w-full">
            <Input
              type="url"
              placeholder="Paste song URL here"
              value={songUrl}
              onChange={(e) => setSongUrl(e.target.value)}
              className="flex-1 h-12"
            />
            <Button type="submit" className="h-12">Add to Queue</Button>
          </form>
        </aside>
        <main className='flex-1 h-full'>
          <SongQueue role="admin"/>
        </main>
      </div>
    </div>
        </div>
    )
}

export default AdminRoomComponent;