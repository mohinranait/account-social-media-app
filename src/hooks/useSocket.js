
import { socketUrl } from '@/envAccess';
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
// import { socketUrl } from '@/envAccess'; // Update this with your actual socket server URL
// const socketUrl = 'http://localhost:5000'
const useSocket = (user) => {
    console.log(socketUrl);

    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = io(socketUrl);

        socketRef.current.on('connect', () => {
            console.log('Connected to server');
            if (user?._id) {
                socketRef.current.emit('addNewUser', user._id);
            }
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, [user]);

    return socketRef.current;
};

export default useSocket;

