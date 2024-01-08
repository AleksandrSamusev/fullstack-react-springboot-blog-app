import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/v1/auth";

export function registerApiCall(registerObj) {
    return axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);
}

export function loginApiCall(loginObj) {
    return axios.post(AUTH_REST_API_BASE_URL + '/login', loginObj);
}
