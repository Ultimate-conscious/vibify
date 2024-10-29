import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Input } from "./ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const SideChat = () => {
    return (
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
    )
}

export default SideChat