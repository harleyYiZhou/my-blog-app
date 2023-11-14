<template>
  <div class="navbar">
    <el-menu
      class="blog-navbar"
      :default-active="activeCategory"
      mode="horizontal"
      @select="handleCategorySelect"
    >
      <el-menu-item
        v-for="category in visibleCategories"
        :key="category.id"
        :index="category.url"
      >
        {{ category.name }}
      </el-menu-item>

      <el-sub-menu v-if="hiddenCategories.length > 0" index="more">
        <template #title>
          <span>更多分类</span>
        </template>
        <el-menu-item
          v-for="category in hiddenCategories"
          :key="category.id"
          :index="category.url"
        >
          {{ category.name }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const categories = ref([
  { id: 1, name: "前端", url: "frontend" },
  { id: 2, name: "Java", url: "java" },
  { id: 3, name: "Python", url: "python" },
  { id: 4, name: "Vue", url: "vue" },
  { id: 5, name: "React", url: "react" },
  { id: 6, name: "PHP", url: "PHP" },
  // 其他分类
]);

const router = useRouter();
const route = useRoute();
const activeCategory = ref(route.params.category || "frontend");

// 分类分为可见的和隐藏的
const visibleCategories = computed(() => categories.value.slice(0, 4));
const hiddenCategories = computed(() => categories.value.slice(4));

const handleCategorySelect = (index) => {
  router.push({ name: "BlogList", query: { category: index } });
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
.navbar {
  margin: 0 10px;
  .el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
    color: #f5f7fa !important;
  }
}
</style>
