import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronUp, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { SongEntity } from "@/lib/types";



const SongQueue = ({role}:{role?: string})=>{
    //Take the songlist as prop and put a upvote handler
    //Take the songlist as prop and put a upvote handler
    const [songList,setSongList] = useState<SongEntity[]>([]);

    useEffect(()=>{
      // socket.on("song-queue-updates",(data)=>{
      //     console.log(data);
      //    //sort the list based on upvotes
      //     setSongList(data);
      // })
      // return ()=>{
      //   socket.off("song-queue-updates")
      //}
    },[])

    const upvoteHandler = ()=>{
      // socket.emit("upvote-song",{songId:1})
      alert("Upvoted")
    }

    const deleteHandler = ()=>{
      // socket.emit("delete-song",{songId:1})
      alert("Song deleted")
    }

    return (
        <>
          <h2 className="text-xl font-bold mx-6 my-4">Up Next</h2>
          <ScrollArea className="w-calc(100%-2rem) h-[calc(100vh-12rem)] mx-6 mt-2 border rounded-lg">
            <div className="space-y-4">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="flex items-center justify-between bg-background p-4 rounded-lg transition-colors border">
                  <div className="flex items-center space-x-3">
                    <img src="/image.png" alt="Album cover" className="w-12 h-12 rounded-md" />
                    <div>
                      <h4 className="font-medium">Queued Song {i + 1}</h4>
                      <p className="text-sm">Queued Artist</p>
                    </div>
                  </div>
                  <Button onClick={upvoteHandler} variant="outline" size="sm" className="space-x-1 hover:cursor-pointer">
                    <ChevronUp className="h-4 w-4" />
                    <span>{Math.floor(Math.random() * 50)}</span>
                  </Button>
                  {role === "admin" ?  
                  <Button onClick={deleteHandler} variant="outline" size="sm" className="space-x-1 hover:cursor-pointer">
                    <Trash2 className="h-4 w-4" />
                    <span>Delete</span>
                  </Button> : null}
                 
                </div>
              ))}
            </div>
          </ScrollArea>
        </>
    )
}

export default SongQueue