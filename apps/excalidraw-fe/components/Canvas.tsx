import { initDraw } from "@/draw";
import { useEffect, useRef } from "react";


export function Canvas({roomId, socket}:{roomId: string, socket: WebSocket}){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if(canvasRef.current){
            const canvas = canvasRef.current;
            initDraw(canvas, roomId, socket);
        }
    }, [canvasRef]);

    return <canvas width={1440} height={732} ref={canvasRef} >

        </canvas>
}