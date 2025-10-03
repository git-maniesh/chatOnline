import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://chat-online-47b7.vercel.app');
}
