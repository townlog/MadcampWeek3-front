import request from "./axios";

export const registerUser = async (info) => {
  const response = await request.post("/users/register", info);
  return response.data;
};
