<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';

const searchText = ref('');
const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};

const goToRegister = () => {
  router.push('/register');
};
</script>

<template>
  <el-header class="header">
    <!-- 左侧部分 -->
    <div class="left">
      <div class="logo">Logo</div>
      <Navbar></Navbar>
      <el-input v-model="searchText" placeholder="Search" class="search-input"></el-input>
    </div>

    <!-- 右侧部分 -->
    <div class="right">
      <el-button type="text" @click="goToLogin">Login</el-button>
      <el-button type="text" @click="goToRegister">Register</el-button>
    </div>
  </el-header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
}

.left {
  display: flex;
  align-items: center;
  flex: 1;
}

.logo {
  margin-right: 20px;
  font-size: 1.5em;
  font-weight: bold;
}

.search-input {
  width: 200px;
  margin-right: 20px;
}

.right {
  display: flex;
  gap: 10px;
}
</style>
