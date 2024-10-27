import express, { Application, Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { Room } from './models/Room';
import { RoomManager } from './models/RoomManager';
import { adminActionType, userActionType } from './types';

const app: Application = express();
const port = 3000;
const httpServer = createServer(app);

const roomManager = new RoomManager();

export const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
  },
});

io.of('/').on('connection', (socket: Socket) => {

  console.log('New client connected:', socket.id);
  
  socket.on("user-actions", (action: userActionType, body)=>{
    const roomId = body.roomId;
    const room = RoomManager.roomMap.get(body.roomId);

    if(!room){
      console.log("Room not found");
      return;
    }

    switch (action) {
      case "join-room":{
        socket.join(roomId);
        break;
      }

      case "add-song":{
        room.addSong({
          url: body.songUrl, 
          upvotes: 1
        });
        break;
      }

      case "upvote-song":{
        room.upvoteSong(body.songUrl);
        break;
      }

      case "downvote-song":{
        room.downvoteSong(body.songUrl);
        break;
      }

      default:
        console.log("Invalid action");
        break;
    }
  })

  socket.on("admin-actions", (action: adminActionType, body)=>{
    //check if this is a admin.

    console.log(body);

    switch (action) {
      case "create-room":{
        const roomId = roomManager.createRoom(socket, body.roomName);
        
        if(!roomId){
          socket.emit("error", "Room creation failed");
          break;
        }

        socket.emit("room-created", roomId);
        break;
      }

      case "delete-room":{
        if(!body.roomId){
          socket.emit("error", "Room deletion failed");
          break;
        }
        //Emit here if we want
        roomManager.deleteRoom(socket, body.roomId);
        socket.emit("room-deleted", body.roomId);  
        break;
      }

      case "remove-user":{ 
        const room = RoomManager.roomMap.get(body.roomId);
        //Use another way than socket.id
        if(room){
          room.removeUser(body.userId, body.roomId);
        }
        break;
      }

      case "remove-song":{
        const room = RoomManager.roomMap.get(body.roomId);
        if(room){
          room.removeSong(body.url);
        }
        //socket.emit("song-queue",room?.songsQueue);
        break;
      }
    
      default:
        break;
    }
  })
  
  // Handle client disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});


app.get('/', (req: Request, res: Response) => {
  res.send('WebSocket server is running');
});
httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});