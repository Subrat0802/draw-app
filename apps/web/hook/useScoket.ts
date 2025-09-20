import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    
      const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0MzU5OTIyLThmNzYtNGE5OC04ZTRkLTM2NGU0YmM4Zjk1YSIsImlhdCI6MTc1ODM3Nzg3NywiZXhwIjoxNzU4NDY0Mjc3fQ.LWHJDZPZysVT9H7XxdfBfqpyNSGDzxStR9q73uxTBsM`);
      ws.onopen = () => {
        setLoading(false);
        setSocket(ws);
        console.log("WebSocket connected");
      };
  }, []);

  return { socket, loading };
}

