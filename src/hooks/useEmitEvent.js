// hooks/useEmitEvent.js
import useSocket from './useSocket';

const useEmitEvent = (user) => {
    const socket = useSocket(user);

    const emit = (event, ...args) => {
        if (socket) {
            socket.emit(event, ...args);
        }
    };

    return emit;
};

export default useEmitEvent;
