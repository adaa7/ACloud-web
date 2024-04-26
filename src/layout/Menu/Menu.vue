<script setup lang='ts'>

</script>

<template>
  <div class="logo">
    <div class="logo-imge">
      <img src="@/assets/images/logo/logo.png" alt="">
    </div>
    <span>ACloud</span>
  </div>
  <div class="user">
    <div class="context">
      <div class="user-logo">
        <img src="/src/assets/images/background.png" alt="">
      </div>
      <p>adaa7</p>
    </div>

  </div>
  <ul>
    <li class="active">
      <span>
        <img src="@/assets/images/muen/Database-success (数据库成功).png" alt="">
      </span>
      <p>我的文件</p>
    </li>
    <li class="">
      <span>
        <img src="@/assets/images/muen/Pic (照片).png" alt="">
      </span>
      <p>图片</p>
    </li>
    <li class="">
      <span>
        <img src="@/assets/images/muen/Play-two (播放器).png" alt="">
      </span>
      <p>视频</p>
    </li>
    <li class="">
      <span>
        <img src="@/assets/images/muen/Audio-file (音频文件).png" alt="">
      </span>
      <p>音频</p>
    </li>
  </ul>
</template>

<style lang='less' scoped>
.active {
  background-color: #EEF9FE;
}

ul {
  margin: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0 10px;
    margin: 0 10px;
    height: 50px;
    border-radius: 5px;

    span {
      float: left;
    }

    p {
      float: left;
      /* 图片 */
      width: 140.12px;
      height: 18.93px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
      /* identical to box height */
      display: flex;
      justify-content: space-around;
      color: #858585;
    }

    &:hover {
      background-color: #EEF9FE;
    }
  }
}

.logo {
  /* Logo */
  height: 62px;
  padding-left: 15px;
  padding-top: 13px;
  border-bottom: 2px solid #E9E9E9;
  margin-bottom: 10px;

  .logo-imge {
    float: left;
    /* Ellipse 5 */
    position: relative;
    box-sizing: border-box;
    width: 44.21px;
    height: 46.37px;
    background: #F3F3F3;
    border: 1px solid #EBEBEB;
    border-radius: 50%;

    img {
      /* Subtract */
      box-sizing: border-box;
      position: absolute;
      width: 39.11px;
      height: 27.66px;
      left: 4%;
      top: 20%;
    }
  }

  span {
    float: left;
    /* ACloud */
    padding-left: 28px;
    width: 98.7px;
    height: 50.07px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 50.07px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
}

.user {
  margin-bottom: 15px;

  .context {
    height: 50px;
    padding-left: 15px;

    .user-logo {
      float: left;
      width: 44.21px;
      height: 46.37px;
      border: 1px solid #EBEBEB;
      border-radius: 50%;
      margin-right: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    p {
      float: left;
      width: 58px;
      height: 47px;
      padding-left: 28px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #424040;


    }
  }
}
</style>