<template>
  <el-menu
    class="blog-navbar"
    :default-active="activeCategory"
    mode="horizontal"
    @select="handleCategorySelect"
  >
    <el-menu-item
      v-for="category in categories"
      :key="category.id"
      :index="category.url"
    >
      {{ category.name }}
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const categories = ref([
  { id: 1, name: '前端', url: 'frontend' },
  { id: 2, name: 'Java', url: 'java' },
  { id: 3, name: 'Python', url: 'python' },
  { id: 4, name: 'Go', url: 'go' },
  { id: 5, name: '数据库', url: 'database' },
  { id: 6, name: '操作系统', url: 'os' },
  { id: 7, name: '计算机网络', url: 'network' },
  { id: 8, name: '其他', url: 'other' },
  // 其他分类
]);

const router = useRouter();
const route = useRoute();
const activeCategory = ref(route.params.category || 'frontend');

const handleCategorySelect = (index) => {
  router.push({ name: 'category', params: { category: index } });
};
</script>

<style scoped>
.blog-navbar {
  background-color: transparent;
  border-bottom: 1px solid #ebeef5;
}

.blog-navbar .el-menu-item {
  font-size: 14px;
  padding: 15px 20px;
  color: #f5f7fa;
}



.blog-navbar .el-menu-item:hover {
  background-color: #f5f7fa;
}
</style>

<style lang="less">
.blog-navbar {
  .el-menu--horizontal>.el-sub-menu .el-sub-menu__title {
    color: #f5f7fa !important;
  }
}
</style>