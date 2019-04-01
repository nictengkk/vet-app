import axios from "axios";

const isDev = process.env.NODE_ENV !== "production";

const getUrl = isDev => {
  return isDev
    ? "http://localhost:5555"
    : "https://backend-for-vet-app.herokuapp.com";
};
const baseURL = getUrl(isDev);

const authApi = axios.create({
  baseURL,
  withCredentials: true
});

export const signup = async data => {
  try {
    const response = await authApi.post("/signup", data);
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    return { error };
  }
};

export const login = async data => {
  try {
    const response = await authApi.post("/login", data);
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    return { error };
  }
};

export const logout = async data => {
  try {
    const response = await authApi.post("/logout", data);
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    return { error };
  }
};
