import { io } from "..";

interface song {
  url: string;
  upvotes: number;
}

type role = "admin" | "user";

export class Room {
  public roomId: string;
  public songsQueue: song[];

  constructor(roomId: string){
    //randomly generate a room id
    this.roomId = roomId;
    this.songsQueue = [];
  }

  public addUser(){

  }

  public removeUser(socketID: string, roomId: string){
    //remove user with socketId
    const clientInRoom = io.sockets.adapter.rooms.get(roomId);
    if(clientInRoom) {
      clientInRoom.forEach((socketId) => {
        if(socketID === socketId) {
          io.sockets.sockets.get(socketId)?.leave(roomId);
        }
      })
    }
  }

  public addSong(song: song){
    if(this.songsQueue.find((s)=>s.url === song.url)){
      return;
    }
    this.songsQueue.push(song);
  }

  public removeSong(url: string){
    //remove song with url
    this.songsQueue = this.songsQueue.filter((song)=>{
      return song.url !== url;
    })
  }

  public upvoteSong(url: string){
    // remember to add a logic such that the song[] is always sorted by upvotes,
    // if any upvote changes the position of a song then make it sorted again and emit the changes to the room.
    const song = this.songsQueue.find((s) => s.url === url);
    if(song){
      song.upvotes++;
    }
  }

  public downvoteSong(url: string){
    const song = this.songsQueue.find((s) => s.url === url);
    if(song){
      song.upvotes--;
    }
  }

  public playNextSong(){
      
  }
}

//emit??