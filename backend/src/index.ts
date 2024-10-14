import express, { Application, Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app: Application = express();
const port = 3000;

// Create HTTP server
const httpServer = createServer(app);

// Create Socket.io server
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Adjust this for production
    methods: ['GET', 'POST'],
  },
});

// Basic Express route
app.get('/', (req: Request, res: Response) => {
  res.send('WebSocket server is running');
});

// Handle WebSocket connection
io.on('connection', (socket: Socket) => {
  console.log('New client connected:', socket.id);

  // Listen for messages from the client
  socket.on('message', (msg: string) => {
    console.log('Received message:', msg);
    // Broadcast message to all connected clients
    io.emit('message', `Server: ${msg}`);
  });

  // Handle client disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start the server
httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
