import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  autoConnect: false,
  autoDisconnect: false,
  reconnection: true,
  reconnectionAttempts: 5,  
  reconnectionDelay: 1000,
});

export default socket;
