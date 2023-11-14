<template>
  <el-button v-if="!store.isLoggedIn" type="text" @click="goToLogin">登录</el-button>
  <el-dropdown v-if="store.isLoggedIn" trigger="click">
    <span class="user-info">
      <el-avatar :src="store.user.avatar" :alt="store.user.name" size="small"></el-avatar>
      <span>{{ store.user.nickname }}</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goToProfile">个人信息</el-dropdown-item>
        <el-dropdown-item @click="createBlog">创作博客</el-dropdown-item>
        <el-dropdown-item @click="toMyBlogList">我的博客</el-dropdown-item>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from '@/store/auth.js';
import { useRouter } from "vue-router";

const store = useAuthStore();
const router = useRouter();

onMounted(() => {
  console.log('store', store)
  store.isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  if(store.isLoggedIn) {
    store.user = JSON.parse(localStorage.getItem("user") || "{}")
  }
});

const goToLogin = () => {
  router.push("/login");
};

const goToProfile = () => {
  router.push("/profile"); // 替换为用户信息页面的路径
};

const logout = () => {
  // 清除 localStorage 中的登录状态和用户信息
  store.logout();

  // 返回首页或其他未登录页面
  router.push("/");
};

const createBlog = () => {
  router.push("/create-blog"); // 替换为创作博客页面的路径
};

const toMyBlogList = () => {
  router.push("/my-blog-list"); // 替换为我的博客列表页面的路径
};
</script>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-info span {
  margin-left: 8px;
}

.user-info:hover {
  color: #409eff;
}
</style>
