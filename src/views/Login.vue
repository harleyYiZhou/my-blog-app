<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="login-title">用户登录</h2>
      <el-form :model="formData" :rules="formRules" ref="loginForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submitButton" type="primary" @click="login">登录</el-button>
          <router-link to="/register">新用户请注册</router-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/api/user';
import { ElMessage } from 'element-plus';
import { useAuthStore } from '@/store/auth.js'

const route = useRoute();
const router = useRouter();
const store = useAuthStore();
const loginForm = ref(null);

const formData = ref({
  username: '',
  password: '',
});

const formRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

const login = () => {
  // 校验表单
  loginForm.value.validate(async (valid) => {
    if (valid) {
      // 处理登录逻辑，例如向后端发起登录请求
      // ...
      try {
        const res = await api.loginUser(formData.value);
        store.login({
          ...res.user,
          token: res.token
        });
        ElMessage.success('登录成功');
        router.push('/');
      } catch(err) {
        console.log('err', err)
        ElMessage.error(err?.response?.data?.error || '登录失败');
      }
      api.loginUser(formData.value).then((res) => {
        // 登录成功后，将登录状态和用户信息存储到 localStorage 中
        

        // 跳转到首页或其他页面
        router.push('/');
      });
    }
  });
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
}

.login-card {
  width: 400px;
  padding: 20px;
}

.login-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.submitButton {
  margin-right: 15px;
}
</style>
