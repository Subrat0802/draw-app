import axios from "axios";
import { BACKEND_URL } from "../../config";
import { ChatRoom } from "../../components/ChatRoom";


async function getRoomId(slug: string) {
  const response = await axios.get(`${BACKEND_URL}/room/${slug}`);
  return response.data.roomId;
}

export default async function ChatRoomPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const roomDetails = await getRoomId(slug);
  return (
    <div>
      <h1>Welcome to room - {roomDetails.slug} / {roomDetails.id} </h1>
      <ChatRoom id={roomDetails.id} />
    </div>
  );
}
