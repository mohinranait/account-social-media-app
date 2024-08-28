import { instance } from "@/hooks/useAxios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
    conversations: [],

    isLoading: false,
    isError: null,
}


export const fetchAllConversation = createAsyncThunk('convercations/getAllConvercation', async ({ user }) => {
    const res = await instance.get(`/chat/conversations/${user?._id}`)
    return res.data?.conversations
})

const convercationSlice = createSlice({
    name: "convercation",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllConversation.pending, (state) => {
            state.isLoading = true
        }),
            builder.addCase(fetchAllConversation.fulfilled, (state, action) => {
                state.conversations = action.payload
            }),
            builder.addCase(fetchAllConversation.rejected, (state, action) => {
                state.isError = action.payload;
            })
    }
})

export default convercationSlice.reducer;