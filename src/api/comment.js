// src/api/comment.js

import axios from './axiosInstance';

// 评论博客
export const commentBlog = async (blogId, comment) => {
  try {
    const response = await axios.post(`/api/blogs/${blogId}/comments`, { comment });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  commentBlog,
};
