import { Room } from "./Room";


export class RoomManager{
    private static instance: RoomManager;

    private static roomMap: Map<string, Room>;

    constructor(){
        if(RoomManager.instance){
            return RoomManager.instance;
        }
        RoomManager.instance = this;
        RoomManager.roomMap = new Map<string,Room>();
    }

    public createRoom(){
        
    }
    public deleteRoom(){

    }
}