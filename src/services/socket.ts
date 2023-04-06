import { io, Socket } from "socket.io-client";

const SERVER_URL: string = `${import.meta.env.VITE_APP_BACKEND_URL}`;

const socket: Socket = io(SERVER_URL);

export default socket;
