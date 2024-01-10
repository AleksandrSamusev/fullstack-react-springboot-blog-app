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

export const saveLoggedInUser = (userId, username, role) => {
    sessionStorage.setItem("userId", userId)
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", role);
}

export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username != null;
}

export const getLoggedInUser = () => {
    return sessionStorage.getItem("authenticatedUser");
}

export const getLoggedInUserId = () => {
    return sessionStorage.getItem("userId");
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}

export const isAdmin = () => {
    let role = sessionStorage.getItem("role");
    return role != null && role === 'ROLE_ADMIN';
}