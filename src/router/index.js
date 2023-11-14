import { createRouter, createWebHistory } from 'vue-router';
import BlogList from '@/views/BlogList.vue';
import BlogDetail from '@/views/BlogDetail.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import UserProfile from '@/views/UserProfile.vue';
import BlogCreate from '@/views/BlogCreate.vue';
import BlogEdit from '@/views/BlogEdit.vue';
import Search from '@/views/Search.vue';
import Favorites from '@/views/Favorites.vue';
import Notifications from '@/views/Notifications.vue';
import usePageTitle from '@/hooks/usePageTitle.ts';
import MyBlogList from '@/views/MyBlogList.vue';

const routes = [
  {
    path: '/',
    name: 'BlogList',
    component: BlogList,
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/create-blog',
    name: 'BlogCreate',
    component: BlogCreate,
  },
  {
    path: '/edit-blog/:id',
    name: 'BlogEdit',
    component: BlogEdit,
  },
  {
    path: '/my-blog-list',
    name: 'MyBlogList',
    component: MyBlogList,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由拦截器
router.beforeEach((to, from, next) => {
  // 在路由切换前调用 usePageTitle，并传递页面的标题
  const setTitle = usePageTitle();
  setTitle(to.name);

  // 继续路由导航
  next();
});

export default router;
