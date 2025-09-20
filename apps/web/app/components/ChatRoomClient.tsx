'use client'

import { useEffect, useState } from "react";
import { useSocket } from "../../hook/useScoket"

export function ChatRoomClient({
    messages,
    id
}: {
    messages:{message: string}[],
    id:string
}){
    const [chats, setChats] = useState(messages);
    const {socket, loading} = useSocket();
    const [currentMsg, setCurrentMsg] = useState("");

    useEffect(() => {
        if(socket && !loading){
            socket.send(JSON.stringify({
                type:"join_room",
                roomId: id
            }))
            socket.onmessage = (event) => {
                const parsedData = JSON.parse(event.data);
                if(parsedData.type === "chat"){
                    setChats(c => [...c, {message: parsedData.message}]);
                }
            }
        }
    }, [socket, loading, id]);


    return <div>
        {chats.map((el, i) => {
            return <p key={i}>{el.message}</p>
        })}

        <input placeholder="Send message" onChange={(e) => setCurrentMsg(e.target.value)} value={currentMsg}/>
        <button onClick={() => {
            socket?.send(JSON.stringify({
                type:"chat",
                roomId: id,
                message: currentMsg
        }))
             setCurrentMsg("");
        }}>Send msg</button>
    </div>

}


