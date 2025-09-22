"use client"

import { WS_URL } from "@/config";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}:{roomId: string}){

    
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0MzU5OTIyLThmNzYtNGE5OC04ZTRkLTM2NGU0YmM4Zjk1YSIsImlhdCI6MTc1ODU3MjEwNSwiZXhwIjoxNzU4NjU4NTA1fQ.LfDUYtafVxuB3_xuI_vtSZ7vkaRp0frkOp0k5KprMds`)
        ws.onopen = () => {
            
            setSocket(ws);

            ws.send(JSON.stringify({
                type: "join_room",
                roomId: Number(roomId)
            }))
        }
    }, [])

    

    if(!socket){
        return <div>
            Connecting to server...
        </div>
    }

    return <div>
        <Canvas roomId={roomId} socket={socket}/>
        

        <div className="absolute bottom-0 mx-auto flex justify-center items-center gap-4 text-white text-3xl w-full text-center">
            <p>circle</p>
            <p>Square</p>
        </div>
    </div>
}