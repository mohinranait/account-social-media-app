import { fetchPostsApi, fetchStatics } from "@/services/api";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    isError: null,
    posts: [],
    statics: {},
}

// get posts
export const fetchPosts = createAsyncThunk(`posts/fetchPosts`, (query = 'all') => {
    return fetchPostsApi(query)
})

// get profile statics
export const fetchProfileStatics = createAsyncThunk(`users/profileStatics`, () => {
    return fetchStatics()
})


const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setAllPosts: (state, { payload }) => {

            state.posts = payload?.payload?.posts;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, { payload }) => {
            state.isLoading = true;
        }).addCase(fetchPosts.fulfilled, (state, { payload }) => {
            console.log(payload);

            state.posts = payload?.payload?.posts;
            state.isLoading = false;
        }).addCase(fetchPosts.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isError = payload.error.message;
        })

        builder.addCase(fetchProfileStatics.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchProfileStatics.fulfilled, (state, action) => {
            console.log(action.payload.payload);

            state.statics = action.payload.payload;
            state.isLoading = false;
        }).addCase(fetchProfileStatics.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isError = payload.message;
        })
    }
})


export const { setAllPosts } = dataSlice.actions;
export default dataSlice.reducer;