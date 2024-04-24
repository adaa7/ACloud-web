<script setup>
import { ref, onMounted } from 'vue';
const yanzhen = ref('');//输入框双向绑定的值
const true_code = ref('');//保存正确的验证码
const yanzhen_arr = ref([]);
onMounted(() => {
  draw(yanzhen_arr.value)
});
function draw(show_num) {
  var canvas_width = document.querySelector("#canvas").clientWidth;
  var canvas_height = document.querySelector("#canvas").clientHeight;
  var canvas = document.getElementById("canvas"); //获取到canvas
  var context = canvas.getContext("2d"); //获取到canvas画图
  canvas.width = canvas_width;
  canvas.height = canvas_height;
  var sCode =
    "a,b,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
  var aCode = sCode.split(",");
  var aLength = aCode.length; //获取到数组的长度

  //4个验证码数
  for (var i = 0; i <= 3; i++) {
    var j = Math.floor(Math.random() * aLength); //获取到随机的索引值
    var deg = (Math.random() * 30 * Math.PI) / 180; //产生0~30之间的随机弧度
    var txt = aCode[j]; //得到随机的一个内容
    show_num[i] = txt.toLowerCase();// 依次把取得的内容放到数组里面
    var x = 10 + i * 20; //文字在canvas上的x坐标
    var y = 20 + Math.random() * 8; //文字在canvas上的y坐标
    context.font = "bold 23px 微软雅黑";

    context.translate(x, y);
    context.rotate(deg);

    context.fillStyle = randomColor();
    context.fillText(txt, 0, 0);

    context.rotate(-deg);
    context.translate(-x, -y);
  }
  //验证码上显示6条线条
  for (let i = 0; i <= 5; i++) {
    context.strokeStyle = randomColor();
    context.beginPath();
    context.moveTo(
      Math.random() * canvas_width,
      Math.random() * canvas_height
    );
    context.lineTo(
      Math.random() * canvas_width,
      Math.random() * canvas_height
    );
    context.stroke();
  }
  //验证码上显示31个小点
  for (let i = 0; i <= 30; i++) {
    context.strokeStyle = randomColor();
    context.beginPath();
    let x = Math.random() * canvas_width;
    let y = Math.random() * canvas_height;
    context.moveTo(x, y);
    context.lineTo(x + 1, y + 1);
    context.stroke();
  }

  //最后把取得的验证码数组存起来，方式不唯一
  let num = show_num.join("");
  // console.log(num);
  true_code.value = num
}
//得到随机的颜色值
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
//canvas点击刷新
function handleCanvas() {
  draw(yanzhen_arr.value);
}
</script>

<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header"><img src="@/assets/logo.svg" alt=""/>register</div>
      <div class="form-wrapper">
        <input type="text" name="username" placeholder="username" class="input-item">
        <input type="password" name="password" placeholder="password" class="input-item">
        <div class="yzm">
          <input style="width: 100px" type="text" placeholder="请输入验证码" class="input-val" v-model.trim="yanzhen"
            @keyup.enter="login_enter" />
          <canvas id="canvas" width="130px" height="33px" @click="handleCanvas"> </canvas>
        </div>
        <router-link to="/">
          <div class="btn">登录</div>
        </router-link>
        <div class="btn">注册</div>
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
}

.yzm {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#canvas {
  float: right;
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 80px;
}

.input-val {
  width: 50%;
  background: #ffffff;
  height: 2.8rem;
  border-radius: 5px;
  border: none;
  padding: 0 0 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.form-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
</style>