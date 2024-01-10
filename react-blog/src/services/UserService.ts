import axios from "axios";
import {getToken} from "./AuthService";

axios.interceptors.request.use(
    async axiosConfig => {
        const token = await getToken()
        if (token && axiosConfig.headers) {
            axiosConfig.headers.Authorization = token
        }
        return axiosConfig
    },
    error => Promise.reject(error),
)

const BASE_REST_API_URL="http://localhost:8080/api/v1/private/users"

export const getAllUsers = () => axios.get(BASE_REST_API_URL);

export const getUserById = (userId: string) =>  axios.get(BASE_REST_API_URL + "/" + userId);
