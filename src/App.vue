<script setup>
// 导入依赖
import Header from '@/components/Header.vue';
// import { ref } from 'vue';
// import { useRoute } from 'vue-router';

// 在这里可以添加一些全局的脚本逻辑

// 返回的对象可以包含在模板中使用的属性和方法
// 例如：const message = ref('Hello, World!');
</script>

<template>
  <div id="apps">
    <!-- 顶部导航栏 -->
    <Header></Header>

    <!-- 主体路由 -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
/* 可以添加一些全局样式 */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

#apps {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  background-color: #333;
  padding: 10px;
  color: white;
  width: 100%;
  box-sizing: border-box;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
}

main {
  max-width: 1200px;
  padding: 20px;
  width: 100%;
}
</style>
