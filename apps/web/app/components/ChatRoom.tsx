import axios from "axios";
import { BACKEND_URL } from "../config";
import { ChatRoomClient } from "./ChatRoomClient";

async function getChats(roomId: string){
    const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
    return response;
}

export async function ChatRoom({id}: {id:string}){
    const res = await getChats(id);
    console.log("RES", res);

    return<>
    <ChatRoomClient id={id} messages={res.data.messages}/>
    </>
    
}