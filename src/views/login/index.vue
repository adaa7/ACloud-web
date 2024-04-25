<script setup lang='ts'>
import { reactive } from 'vue';
import useUserStore from '@/stores/modules/user';
import { ElNotification } from 'element-plus'

let userStore = useUserStore()
let loginForm = reactive({
  username: 'admin',
  password: '1234',
})
const login = ()=>{
  userStore.userLogin(loginForm).then((data:any)=>{
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI，`
    })
  })
}
</script>

<template>
  <body>
    <div class="box">
      <h2>Login</h2>
      <div class="input-box">
        <form action="">
          <div class="input-box">
            <label>账号</label>
            <input type="text" v-model="loginForm.username"/>
          </div>
          <div class="input-box">
            <label>密码</label>
            <input type="password" v-model="loginForm.password"/>
          </div>
          <div class="btn-box">
            <a href="#">忘记密码?</a>
            <div>
              <button @click="login()" type="button">登录</button>
              <button type="button">注册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </body>
    
</template>

<style scoped>
body {
    width: 100%;
    height: 100vh;
    background-image: url("@/assets/images/background.png");
    background-size: cover;
}
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 350px;
    height: 350px;
    border: 1px solid rgba(255,255,255,0.5);
    display: flex;
    backdrop-filter: blur(10px);
    background: rgba(50,50,50,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
.box>h2 {
    padding-left: 47px;
    color: rgba(255,255,255,0.9);
    font-size: 25px;
    margin-bottom: 30px;
}
.box>h2::before {
    content: "";
    display: block;
    position: absolute;
    left: 70px;
    top: 25px;
    width: 80.26px;
    height: 51px;
    background: url("@/assets/images/logo/logo.png") no-repeat;
    background-position: top center;
    background-size: cover;

}
.box .input-box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.box .input-box label {
    font-size: 13px;
    color: rgba(255,255,255,0.9);
    margin-bottom: 5px;
}
.box .input-box>input {
    letter-spacing: 1px;
    font-size: 14px;
    box-sizing: border-box;
    width: 250px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.2);
    outline: none;
    padding: 0 12px;
    color: rgba(255,255,255,0.9);
    transition: 0.2s;
}   
.box .input-box input:focus {
    border: 1px solid rgba(255,255,255,2);
}

.box .btn-box {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.box .btn-box > a {
    outline: none;
    display: block;
    width: 250px;
    text-align: end;
    text-decoration: none;
    font-size: 13px;
    color: rgba(255,255,255,0.9);
}

.box .btn-box > a:hover {
    color: rgba(255,255,255,1);
}

.box .btn-box > div {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box .btn-box > div > button {
    outline: none;
    margin-top: 10px;
    display: block;
    font-size: 14px;
    border-radius: 5px;
    transition: 0.2s;
}

.box .btn-box > div > button:nth-of-type(1) {
    width: 120px;
    height: 35px;
    color: rgba(255,255,255,0.9);
    border: 1px solid rgba(192, 119, 91, 0.7);
    background: rgba(192, 119, 91, 0.5);
}

.box .btn-box > div > button:nth-of-type(2) {
    width: 120px;
    height: 35px;
    margin-left: 10px;
    color: rgba(255,255,255,0.9);
    border: 1px solid rgba(192, 119, 91, 0.7);
    background: rgba(192, 119, 91, 0.5);
}

.box .btn-box > div > button:hover {
    border: 1px solid rgba(251, 128, 71, 0.7);
    background: rgba(251, 128, 71, 0.5);
}
</style>