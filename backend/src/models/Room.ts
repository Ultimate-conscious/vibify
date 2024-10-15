interface song{
    url: string;
    upvotes: number;
}


export class Room{
    public roomId: string;
    private songsQueue: song[];

    constructor(roomId: string){
        //randomly generate a room id
        this.roomId = roomId;
        this.songsQueue = [];
    }

    public addUser(){

    }
    public removeUser(){

    }
    public addSong(song: song){
        this.songsQueue.push(song);
    }
    public removeSong(){
        this.songsQueue.shift();
    }
    public upvoteSong(){

    }
    public playNextSong(){

    }
}

