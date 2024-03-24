import { createStore } from "zustand";

export const authStore = createStore((set) => ({
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  avatar: "",
  accessToken: "",
  setToken: (token) => setToken(token, set),
  setUserInfo: (userInfo) => setUserInfo(userInfo, set),
}));

const setToken = (token, set) => {
  set((state) => ({
    ...state,
    accessToken: token,
  }));
};

const setUserInfo = (userInfo, set) => {
  set((state) => ({
    ...state,
    userName: userInfo.userName,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    avatar: userInfo.avatar,
  }));
};
