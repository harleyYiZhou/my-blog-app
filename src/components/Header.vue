<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import LoginButton from '@/components/LoginButton.vue';

const searchText = ref('');
const router = useRouter();

function toIndex() {
  router.push('/');
}

function search() {
  router.push({ name: 'BlogList', query: { search: searchText.value } });
}
</script>

<template>
  <el-header class="header">
    <!-- 左侧部分 -->
    <div class="left">
      <div class="logo" @click="toIndex">Logo</div>
      <Navbar></Navbar>
      <el-input v-model="searchText" placeholder="Search" @change="search" class="search-input"></el-input>
    </div>

    <!-- 右侧部分 -->
    <LoginButton></LoginButton>
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
  cursor: pointer;
}

.search-input {
  max-width: 350px;
  margin-right: 20px;
}

.right {
  display: flex;
  gap: 10px;
}


</style>
