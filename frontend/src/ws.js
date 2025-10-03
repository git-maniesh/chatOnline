import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://chatonline-backend-jvte.onrender.com');
}
