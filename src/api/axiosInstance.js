// src/api/axios.js

import axios from 'axios';
const token = ''

const baseURL = process.env.NODE_ENV !==  'production' ? 'http://localhost:3000' : `${window.location.origin}:3000`;

const instance = axios.create({
  baseURL: baseURL, // 替换成您的API基础URL
  headers: {
    'Content-Type': 'application/json',
  // 如果有登录token，可以在这里设置
  'Authorization': `Bearer ${token}`, // 将token添加到请求头
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理
    return config;
  },
  (error) => {
    // 当请求异常时做一些处理
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理
    return response;
  },
  (error) => {
    // 当响应异常时做一些处理
    return Promise.reject(error);
  }
);

export default instance;
