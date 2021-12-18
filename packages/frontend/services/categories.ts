import API from "../constants/api";
import { fetchWithAuth } from "../utils/fetch";

export const getAllCategories = async () => {
  const data = await fetchWithAuth(API.categories);
  console.log("categories function", data);
  return data;
};
