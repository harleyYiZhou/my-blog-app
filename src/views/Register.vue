<template>
  <div class="register-container">
    <el-card class="register-card">
      <h2 class="register-title">注册新用户</h2>
      <el-form :model="formData" :rules="formRules" ref="registerRef" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="formData.confirmPassword" type="password" placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="formData.nickname" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submitButton" type="primary" @click="register">注册</el-button>
          <router-link to="/login">前往登录</router-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser } from '@/api/user';
import { ElMessage } from 'element-plus';

const router = useRouter();

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  nickname: '',
});
const registerRef = ref(null);

const formRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
      message: '用户名必须是字母和数字的组合，长度为6-16个字符',
      trigger: 'blur',
    },
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        console.log(value, formData.value.password)
        if (value !== formData.value.password) {
          callback(new Error('两次输入的密码不一致'));
        } else {
          callback();
        }
      },
      trigger: 'blur',
    },
  ],
  nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
};

const register = () => {
  // 校验表单
  console.log('registerRef', registerRef)
  registerRef.value.validate(async (valid) => {
    if (valid) {
      // 处理注册逻辑，例如向后端发起注册请求
      // ...
      await registerUser(formData.value);
      // 提示成功
      ElMessage.success('注册成功');
      // 跳转到登录页面或其他页面
      router.push('/login');
    }
  });
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
}

.register-card {
  width: 400px;
  padding: 20px;
}

.register-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.submitButton {
  margin-right: 15px;
}
</style>
