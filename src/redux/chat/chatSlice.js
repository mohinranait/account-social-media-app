import { instance } from "@/hooks/useAxios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



const initialState = {
    convercation: {},
    messages: [],
    isLoading: false,
    isError: null,
}

export const fetchAllMessageByConversation = createAsyncThunk(`message/allMessage`, async ({ reciver }) => {

    const res = await instance.get(`/chat/allmessage/${reciver?._id}`);

    return res?.data?.messages;
})

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addConvercation: (state, action) => {
            state.convercation = action.payload
        },
        addMessage: (state, { payload }) => {
            state.messages = [...state.messages, payload]
        },
        getMessages: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllMessageByConversation.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllMessageByConversation.fulfilled, (state, { payload }) => {
            state.messages = payload || []
        });
        builder.addCase(fetchAllMessageByConversation.rejected, (state, { payload }) => {
            state.isError = payload || "Somthing wrong"
        });
    }
})

export const { addConvercation, addMessage, getMessages } = chatSlice.actions;
export default chatSlice.reducer;