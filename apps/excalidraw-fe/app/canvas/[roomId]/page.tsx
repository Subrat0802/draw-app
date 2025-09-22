"use client"
import { initDraw } from "@/draw";
import { useEffect, useRef } from "react"


export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if(canvasRef.current){
            const canvas = canvasRef.current;
            initDraw(canvas);
        }
    }, [canvasRef]);

    return <div>
        <canvas width={1440} height={732} ref={canvasRef} className=" bg-gray-600">

        </canvas>
    </div>
}