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