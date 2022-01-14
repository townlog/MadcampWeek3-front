import request from "./axios";

export const getMyFriends = async () => {
  const response = await request.get("/friends");
  return response.data;
};

export const SearchUser = async (nickname) => {
  const response = await request.post("/friends/search", { nickname });
  return response.data;
};
