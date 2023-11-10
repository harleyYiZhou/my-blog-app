<template>
  <div class="blog-list">
    <h1>博客列表</h1>

    <!-- 分类标签 -->
    <div class="tag-filter">
      <button
        @click="filterByTag('Java')"
        :class="{ 'active': selectedTag === 'Java' }"
      >Java</button>
      <button
        @click="filterByTag('JavaScript')"
        :class="{ 'active': selectedTag === 'JavaScript' }"
      >JavaScript</button>
      <!-- 其他标签按钮 -->
    </div>

    <!-- 搜索框 -->
    <input
      class="search-input"
      v-model="searchKeyword"
      @input="searchBlogs"
      placeholder="搜索博客"
    >

    <button @click="publish">
      发布
    </button>

    <!-- 博客列表 -->
    <div class="blog-cards">
      <div v-for="blog in filteredBlogs" :key="blog.id" class="blog-card">
        <h2 @click="goToBlogDetail(blog.id)">{{ blog.title }}</h2>
        <p class="author">作者: {{ blog.author }}</p>
        <p class="date">发布日期: {{ blog.date }}</p>
        <p class="content">{{ blog.content }}</p>
        <p class="tags">标签: {{ blog.tags.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { getBlogList, createBlog } from '@/api/blog'
const router = useRouter()

const blogs = ref({
  list: [],
  currentPage: 1,
  pageSize: 10,
  total: 0,
});
const filteredBlogs = computed(() => {
  return blogs.value.list.filter(blog => blog.tags.includes(selectedTag.value) && blog.title.toLowerCase().includes(searchKeyword.value.toLowerCase()));
});
const selectedTag = ref('Java');
const searchKeyword = ref('');

const filterByTag = (tag) => {
  selectedTag.value = tag;
};

const searchBlogs = () => {
  // 根据关键词搜索博客
  // selectedTag.value = ''; // 重置标签筛选
};
const goToBlogDetail = (id) => {
  // 导航到博客详情页面
  router.push({ name: 'BlogDetail', params: { id } });
};

async function publish() {
  const res = await createBlog({
    title: '测试标题',
    content: '测试内容',
    author: '123',
    tags: ['Java', 'JavaScript']
  })
  return res
}

async function getList() {
  const res = await getBlogList({
    currentPage: blogs.value.currentPage,
    pageSize: blogs.value.pageSize
  })
  console.log('res', res)
  const newBlogs = res.data.list;
  blogs.value = {
    list: [...blogs.value.list, ...newBlogs],
    total: res.data.total,
    currentPage: res.data.currentPage
  }
} 

onMounted(() => {
  getList()
})
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
    background-color: #007BFF;
    color: white;
    border-color: #007BFF;
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
    .author, .date, .content, .tags {
      font-size: 14px;
    }
    .tags {
      font-style: italic;
    }
  }
}
</style>