// hooks/useSocketEvent.js
import { useEffect } from 'react';
import useSocket from './useSocket';

const useSocketEvent = (event, handler, user) => {
    const socket = useSocket(user);

    useEffect(() => {
        if (socket) {
            socket.on(event, handler);
        }

        return () => {
            if (socket) {
                socket.off(event, handler);
            }
        };
    }, [socket, event, handler]);

    return socket;
};

export default useSocketEvent;
