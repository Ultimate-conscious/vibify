import { Socket } from "socket.io";
import { Room } from "./Room";
import { io } from "..";
import { generate} from "randomstring";


export class RoomManager{
    private static instance: RoomManager;

    public static roomMap: Map<string, Room>;

    constructor(){
        if(RoomManager.instance){
            return RoomManager.instance;
        }
        RoomManager.instance = this;
        RoomManager.roomMap = new Map<string,Room>();
    }

    public createRoom(socket: Socket){
        //generate a random room id
        const roomId = generate(12);
        const room = new Room(roomId);
        RoomManager.roomMap.set(socket.id,room);
        socket.join(roomId);
        console.log("Room created with id: ",roomId);
    }
    public deleteRoom(socket: Socket,roomId: string){
        RoomManager.roomMap.delete(socket.id);
        //delete room with roomId
        const clientInRoom = io.sockets.adapter.rooms.get(roomId);
        //making everyon leave the room, so that the room is deleted
        if(clientInRoom){
            clientInRoom.forEach((socketId)=>{
                io.sockets.sockets.get(socketId)?.leave(roomId);
            })
        }
    }
}