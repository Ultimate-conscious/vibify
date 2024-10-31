import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SongEntity } from "@/lib/types";
import { useEffect, useState } from "react";

export default function CurrentSongCard(){
  const [currentSong, setCurrentSong] = useState<SongEntity>();
  useEffect(()=>{
    // socket.on("currently-playing",(data)=>{
    //     console.log(data);
    //     setCurrentSong(data);
    // })
    // return ()=>{
    //   socket.off("currently-playing");
    //}
  },[])

  return (
    <Card className="flex flex-col md:flex-row items-center w-full">
      <CardHeader>
        <CardTitle>Currently Playing</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex md:flex-row flex-col md:items-center space-x-8 mt-4'>
          <img src="/image.png" alt="Album cover" className="w-12 h-12 rounded-md"/>
          <div className="flex flex-col">
            <p>Song Name</p>
            <p>Artist Name</p>
          </div>
          <div>
            ------0:55/1:46--------
          </div>
        </div>
      </CardContent>
    </Card>
  )
}