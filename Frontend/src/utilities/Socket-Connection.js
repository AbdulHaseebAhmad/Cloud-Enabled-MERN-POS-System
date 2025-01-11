import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_APP_BACKEND_API_URL, {
  autoConnect: false,
  autoDisconnect: false,
  reconnection: true,
  reconnectionAttempts: 5,  
  reconnectionDelay: 1000,
});

export default socket;
