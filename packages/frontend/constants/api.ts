const API_ROOT = "http://localhost:1337";

export const API = {
  root: `${API_ROOT}`,
  login: `${API_ROOT}/auth/local`,
  habits: `${API_ROOT}/habits`,
  habitlogs: `${API_ROOT}/habit-logs`,
};
export default API;
