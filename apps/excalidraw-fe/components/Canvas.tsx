import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";

export function Canvas({ roomId, socket }: { roomId: string; socket: WebSocket }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function updateWindowSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      initDraw(canvasRef.current, roomId, socket);
    }
  }, [canvasRef, roomId, socket]);

  return (
    <canvas
      ref={canvasRef}
      width={size.width}
      height={size.height}
      style={{ display: "block" }} 
    />
  );
}
