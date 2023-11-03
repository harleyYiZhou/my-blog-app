// src/api/user.js
import axios from './axiosInstance';

// 用户注册
export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 用户登录
export const loginUser = async (userData) => {
  try {
    const response = await axios.post('/api/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 获取用户信息
export const getUserInfo = async () => {
  try {
    const response = await axios.get('/api/user/profile');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  registerUser,
  loginUser,
  getUserInfo,
};
