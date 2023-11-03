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

export default router;
