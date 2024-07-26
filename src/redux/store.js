const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "./auth/authSlice";
import chatReducer from "./chat/chatSlice";
import convercationReducer from "./chat/convercationSlice";



const store = configureStore({
    reducer: {
        auth: authReducer,
        convercation: convercationReducer,
        chat: chatReducer
    },
});

export default store;
