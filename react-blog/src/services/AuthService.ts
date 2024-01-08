import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/v1/auth";

export function registerApiCall(registerObj) {
    return axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);
}

export function loginApiCall(loginObj) {
    return axios.post(AUTH_REST_API_BASE_URL + '/login', loginObj);
}

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username) => {
    sessionStorage.setItem("authenticatedUser", username);
}

export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username != null;
}

export const getLoggedInUser = () => {
    return sessionStorage.getItem("authenticatedUser");
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}