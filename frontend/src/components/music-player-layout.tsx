import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronUp, MessageSquare, Music, User } from 'lucide-react'

export function MusicPlayerLayoutComponent() {
  const [songUrl, setSongUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic to add song to queue would go here
    console.log('Song URL submitted:', songUrl)
    setSongUrl('')
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-800">Collaborative Jams</h1>
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
            <div className="bg-white p-6 rounded-lg mb-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Now Playing</h2>
              <div className="flex items-center space-x-4">
                <img src="/placeholder.svg?height=80&width=80" alt="Album cover" className="w-20 h-20 rounded-md shadow-sm" />
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Song Title</h3>
                  <p className="text-gray-600">Artist Name</p>
                </div>
              </div>
            </div>

            {/* Song queue */}
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Up Next</h2>
            <ScrollArea className="flex-1 -mx-2 px-2">
              <div className="space-y-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <img src="/placeholder.svg?height=40&width=40" alt="Album cover" className="w-10 h-10 rounded-md" />
                      <div>
                        <h4 className="font-medium text-gray-900">Queued Song {i + 1}</h4>
                        <p className="text-sm text-gray-600">Queued Artist</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="space-x-1">
                      <ChevronUp className="h-4 w-4" />
                      <span>{Math.floor(Math.random() * 50)}</span>
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

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
          <div className="w-80 bg-white p-4 rounded-lg shadow-sm border border-gray-200 hidden lg:block">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Chat</h2>
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <div className="space-y-4">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=32&width=32&text=U${i+1}`} />
                      <AvatarFallback>U{i+1}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900">User {i + 1}</p>
                      <p className="text-sm text-gray-600">This is a chat message!</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-4">
              <Input placeholder="Type a message..." />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}