// auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: {},
  }),
  actions: {
    login(userInfo) {
      // 处理登录逻辑
      // ...

      // 设置登录状态和用户信息
      this.isLoggedIn = true;
      this.user = userInfo;

      // 将登录状态和用户信息存储在 localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(userInfo));
    },
    logout() {
      // 处理退出登录逻辑
      // ...

      // 清除登录状态和用户信息
      this.isLoggedIn = false;
      this.user = {};

      // 清除 localStorage 中的信息
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
    },
  },
});
