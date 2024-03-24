import { authStore } from "./authStore";

const refreshToken = async () => {
  const { accessToken, setToken } = authStore();
  if (accessToken < 5) {
    console.log("Refresh token");
    setToken(10);
  }
};

const setAutoRefreshToken = () => {
  const interval = setInterval(() => {
    refreshToken();
  }, 6000);
  return interval;
};

export { setAutoRefreshToken };
