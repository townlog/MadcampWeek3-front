import request from "./axios.js";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const ACCESS_TOKEN = "accessToken";

export const login = async (accessToken) => {
  const response = await request.post("/users/login", {
    accessToken,
  });

  return response.data;
};

export const setAccessTokenToCookie = (accessToken) => {
  cookies.set(ACCESS_TOKEN, accessToken, { sameSite: "strict" });
};

export const getAccessToken = () => {
  return cookies.get(ACCESS_TOKEN);
};
