// src/api/blogs.js

import axios from './axiosInstance';

// 获取博客列表
export const getBlogList = async (params) => {
  try {
    const response = await axios.get('/api/blogs', { params });
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

// 获取博客详情
export const getBlogDetail = async (blogId) => {
  try {
    const response = await axios.get(`/api/blogs/${blogId}`);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

// 发布新博客
export const createBlog = async (blogData) => {
  try {
    const response = await axios.post('/api/blogs/publish', blogData);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

// 评论博客
export const commentBlog = async (blogId, comment) => {
  try {
    const response = await axios.post(`/api/blogs/${blogId}/comments`, { comment });
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export default {
  getBlogList,
  getBlogDetail,
  createBlog,
  commentBlog,
};
