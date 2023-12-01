<template>
  <div class="h-screen w-screen box min-w-max min-h-max">
    <div class="flex flex-col items-center justify-center h-full">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white">Kristina Admin</h1>
      </div>
      <div class="flex w-[800]px flex-row mt-20 bg-white rounded-xl font-bold">
        <div class="flex-1 px-20 pt-10">
          <h1 class="font-bold text-3xl">Welcome Back👋</h1>
          <p class="pt-3 font-normal">Sigin in to start mannaging your post</p>
          <el-form
            class="pt-3"
            :model="loginForm"
            :rules="rules"
            ref="loginFormRef"
          >
            <el-form-item prop="username">
              Emial:
              <el-input
                round
                type="text"
                placeholder="Please enter your Email"
                v-model="loginForm.username"
              />
            </el-form-item>
            <el-form-item prop="password">
              Password:
              <el-input
                type="password"
                placeholder="Please enter your Password"
                v-model="loginForm.password"
              />
            </el-form-item>

            <p class="w-full text-right font-normal underline text-blue-600">
              <a href="">Forgot Password?</a>
            </p>

            <el-form-item class="pt-5">
              <button
                @click="loginHandler"
                class="w-full h-10 rounded-xl bg-gray-800 text-white"
              >
                Sign in
              </button>
            </el-form-item>

            <el-form-item>
              <h1 class="w-full text-center">Or</h1>
            </el-form-item>
            <el-form-item>
              <div
                class="w-full flex flex-row leading-10 h-10 items-center justify-center bg-[#F3F9FA] rounded-xl"
              >
                <svg-icon class="mx-5" name="Google" />
                <button>Sign in with Google</button>
              </div>
            </el-form-item>
            <el-form-item>
              <div
                class="w-full flex flex-row leading-10 h-10 items-center justify-center bg-[#F3F9FA] rounded-xl"
              >
                <svg-icon class="mx-5" name="Github" />
                <button>Sign in with Github</button>
              </div>
            </el-form-item>
          </el-form>
          <h1 class="w-full text-center font-normal mt-4 text-sm">
            Dont have an account
            <a href="" class="text-blue-600 underline">Register Now</a>
          </h1>
          <h1 class="w-full text-center my-3 text-gray-700">
            @2023 Copyright Kristina
          </h1>
        </div>

        <div class="flex p-2 py-5">
          <img
            src="@/assets/images/login.png"
            alt="@/assets/images/login.png"
            class="rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import router from '@/router'
import { useUserStore } from '@/store/modules/user'
import { LoginForm } from '@/types/user/axios'
import { ElNotification, FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { getTime } from '@/utils/common/TimeUtil'
const useStore = useUserStore()
const loginForm: LoginForm = reactive({
  username: 'Kristina',
  password: '123456',
})

const loginFormRef = ref<FormInstance>()
const validatePassword = (_rule: any, value: any, callback: any) => {
  if (value.length > 5 && value.length < 20) {
    callback()
  } else {
    callback(new Error('密码长度在5到20位之间'))
  }
}
const validateUserName = (_rule: any, value: any, callback: any) => {
  if (value.length > 5 && value.length < 20) {
    callback()
  } else {
    callback(new Error('用户名长度5到20位之间'))
  }
}
const rules = reactive({
  username: [{ trigger: 'change', validator: validateUserName }],
  password: [{ trigger: 'change', validator: validatePassword }],
})
const loginHandler = async () => {
  await loginFormRef.value?.validate()
  try {
    await useStore.userLogin(loginForm)
    router.push('/')
    ElNotification.success({
      title: getTime(),
      message: 'Welcome to Kristina',
    })
  } catch (error) {
    ElNotification.error((error as Error).message)
  }
}
</script>

<style scoped lang="less">
.box {
  background: url('@/assets/images/background.png');
  background-size: cover;
  overflow: hidden;
}
</style>
@/types/axios/axios