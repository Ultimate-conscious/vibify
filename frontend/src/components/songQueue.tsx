import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronUp } from "lucide-react"
import { Button } from "./ui/button"

const SongQueue = ()=>{
    return (
        <>
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
        </>
    )
}

export default SongQueue