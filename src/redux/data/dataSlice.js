import { fetchPostsApi, fetchStatics } from "@/services/api";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    isError: null,
    posts: [],
    statics: {},
}

// get posts
export const fetchPosts = createAsyncThunk(`posts/fetchPosts`, async (query = 'all') => {
    let response = await fetchPostsApi(query)
    return response;
})

// get profile statics
export const fetchProfileStatics = createAsyncThunk(`users/profileStatics`, async () => {
    let response = await fetchStatics()
    return response;
})


const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setAddPost: (state, { payload }) => {
            // Set new post in posts state
            state.posts = [payload?.payload?.post, ...state.posts];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, { payload }) => {
            state.isLoading = true;
        }).addCase(fetchPosts.fulfilled, (state, { payload }) => {
            state.posts = payload?.payload?.posts;
            state.isLoading = false;
        }).addCase(fetchPosts.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isError = payload.error.message;
        })

        builder.addCase(fetchProfileStatics.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchProfileStatics.fulfilled, (state, action) => {
            state.statics = action.payload.payload;
            state.isLoading = false;
        }).addCase(fetchProfileStatics.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isError = payload.message;
        })
    }
})


export const { setAddPost } = dataSlice.actions;
export default dataSlice.reducer;