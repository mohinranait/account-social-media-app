import axios from "axios"

export const getSingleUser = async (options) => {
    try {
        console.log(options);
        const res = await axios.get(`http://localhost:5000/api/user/single`, {
            params: options,
            withCredentials: true,
        });
        console.log(res?.data);
        if (res.data.success) {
            return res?.data?.payload
        } else {
            return {
                message: "Somthing wrong",
            }
        }
    } catch (error) {
        return {
            message: error.message,
            success: false,
        }
    }
}