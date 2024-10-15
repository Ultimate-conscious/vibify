import express, { Application, Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { Room } from './models/Room';
import { RoomManager } from './models/RoomManager';

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
  
  // Listen for messages from the client
  socket.on('message', (msg: string) => {
    console.log('Received message:', msg);
    io.emit('message', `Server: ${msg}`);
  });
  
  
  
  socket.on("create-room", () => {
    //check if it is an admin.
    //roomManager.createRoom()
  });
  
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