import request from "./axios";

export const getMe = async () => {
  const response = await request.get("/users/me");
  console.log(`response`, response);
  return response.data;
};
