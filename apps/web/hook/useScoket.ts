import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    
      const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0MzU5OTIyLThmNzYtNGE5OC04ZTRkLTM2NGU0YmM4Zjk1YSIsImlhdCI6MTc1ODU3MjEwNSwiZXhwIjoxNzU4NjU4NTA1fQ.LfDUYtafVxuB3_xuI_vtSZ7vkaRp0frkOp0k5KprMds`);
      ws.onopen = () => {
        setLoading(false);
        setSocket(ws);
        console.log("WebSocket connected");
      };
  }, []);

  return { socket, loading };
}

