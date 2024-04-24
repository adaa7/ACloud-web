<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <div class="login-wrapper">
            <div class="header"><img src="@/assets/logo.svg" alt=""/>Login</div>
            <div class="form-wrapper">
                <input type="text" name="username" placeholder="username" class="input-item">
                <input type="password" name="password" placeholder="password" class="input-item">
                <div class="btn">登录</div>
                <router-link to="/register"><div class="btn">注册</div></router-link>
            </div>
        </div>
        </div>
</template>

<style scoped>
.container {
    height: 100%;
    min-width: 400px;
    min-height: 500px;
    background: url('@/assets/bg.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

}

.login-wrapper {
    opacity: 0.9;
    background-color: #FFFFFF;
    width: 300px;
    height: 500px;
    border-radius: 15px;
    padding: 0 50px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 175px;
}

.input-item {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 0;
    padding: 10px;
    border-bottom: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;
}

.input-item:placeholder {
    text-transform: uppercase;
}

.btn {
    cursor: pointer;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    width: 118px;
    margin-top: 40px;
    background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
    color: #fff;
}
a {
    text-decoration-line: none;
    color: #abc1ee;
    display: block;
}
.form-wrapper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
</style>