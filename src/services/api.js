import { instance } from "@/hooks/useAxios"

export const fetchPostsApi = async (query) => {
    try {
        const { data } = await instance.get(`/post/all?query=${query}`);
        return data;
    } catch (error) {
        return error;
    }
}

export const fetchStatics = async () => {
    try {
        const { data } = await instance.get(`/user/profile/statics`);
        return data;
    } catch (error) {
        return error;
    }
}