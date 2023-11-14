<template>
  <div class="blog-list">
    <!-- 博客列表 -->
    <div class="blog-cards">
      <div v-for="blog in filteredBlogs" :key="blog.id" class="blog-card">
        <h2 @click="goToBlogDetail(blog.id)">{{ blog.title }}</h2>
        <p class="author">作者: {{ blog.author }}</p>
        <p class="date">发布日期: {{ blog.date }}</p>
        <p class="content">{{ blog.content }}</p>
        <p class="tags">标签: {{ blog.tags.join(", ") }}</p>
      </div>
    </div>
    <!-- 已经没有内容了,添加loading特效 -->
    <div v-if="blogs.currentPage * blogs.pageSize >= blogs.total">
      <p :style="{textAlign: 'center'}" v-if="loading">加载中...</p>
      <p :style="{textAlign: 'center'}" v-else>已经没有内容了</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getBlogList, createBlog } from "@/api/blog";
const router = useRouter();
const route = useRoute();
const loading = ref(false)

const blogs = ref({
  list: [],
  currentPage: 1,
  pageSize: 2,
  total: 0,
});
const filteredBlogs = computed(() => {
  return blogs.value.list;
});
const goToBlogDetail = (id) => {
  // 导航到博客详情页面
  router.push({ name: "BlogDetail", params: { id } });
};

async function getList() {
  loading.value = true
  const res = await getBlogList({
    currentPage: blogs.value.currentPage,
    pageSize: blogs.value.pageSize,
  });
  console.log("res", res);
  const newBlogs = res.data.list;
  blogs.value = {
    list: [...blogs.value.list, ...newBlogs],
    total: res.data.total,
    currentPage: res.data.currentPage,
    pageSize: blogs.value.pageSize,
  };
  loading.value = false
}

async function resetList() {
  const res = await getBlogList({
    currentPage: 1,
    pageSize: blogs.value.pageSize,
  });
  const newBlogs = res.data.list;
  blogs.value = {
    list: [...newBlogs],
    total: res.data.total,
    currentPage: res.data.currentPage,
    pageSize: blogs.value.pageSize,
  };
}

// 监听路由route的query参数，若变化则调用接口
watch(
  () => route.query,
  () => {
    resetList();
  }
);

onUnmounted(() => {
  window.removeEventListener("scroll");
});

onMounted(() => {
  getList();
  // 监听滚动事件，若滚动到底部时，去获取下一页的列表，倘若没有下一页，则不再获取
  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (blogs.value.currentPage * blogs.value.pageSize < blogs.value.total) {
        blogs.value.currentPage++;
        getList();
      }
    }
  });
});
</script>

<style lang="less" scoped>
.blog-list {
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.tag-filter {
  margin-bottom: 20px;
  button {
    margin-right: 10px;
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  .active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.blog-cards {
  .blog-card {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: #f5f5f5;
    }
    h2 {
      font-size: 18px;
      margin: 0;
      cursor: pointer;
    }
    .author,
    .date,
    .content,
    .tags {
      font-size: 14px;
    }
    .tags {
      font-style: italic;
    }
  }
}
</style>
