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
    origin: '*', 
    methods: ['GET', 'POST'],
  },
});

 

io.of('/').on('connection', (socket: Socket) => {

  console.log('New client connected:', socket.id);
  
  socket.on("user-actions",(action: userActionType,body)=>{

  })

  socket.on("admin-actions",(action: adminActionType,body)=>{
    //check if this is a admin.
    switch (action) {
      case "create-room":{
        console.log(body);
        roomManager.createRoom(socket);
        break;
      }

      case "delete-room":{
        console.log(body);
        roomManager.deleteRoom(socket,body.roomId);
        break;
      }

      case "remove-user":{
        console.log(body);
        const room = RoomManager.roomMap.get(socket.id);
        if(room){
            room.removeUser(body.userId,body.roomId);
        }
        break;
      }

      case "remove-song":{
        console.log(body);
        const room = RoomManager.roomMap.get(socket.id);
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