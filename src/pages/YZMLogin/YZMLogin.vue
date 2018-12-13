<template>
  <div class="app">
    <header class="header">
      <div class="title">
        <a href="javascript:" @click="$router.back()">
          <i class="icon iconfont icon-2fanhui"></i>
        </a>
      </div>
      <div class="hd">
        <div class="hd-l">
          <span>登录</span>
        </div>
        <div class="hd-r"></div>
      </div>
    </header>
    <div class="bd">
      <div class="bd-item">
        <i class="icon iconfont icon-shouji"></i>
        <input type="text" placeholder="请输入手机号" class="txt-sjh" maxlength="11" v-model="phone">
      </div>
      <div class="bd-item">
        <i class="icon iconfont icon-dun"></i>
        <input type="text" placeholder="请输入验证码" class="txt-yzm" v-model="code">
        <i class="icon iconfont icon-line" id="icon-line"></i>
        <button :disabled="!rightPhone" class="span-yzm" :class="{right_phone: rightPhone}" @click="getClick">获取验证码</button>
      </div>
    </div>
    <div class="btn-bg">
      <div class="btn">
        <span>登录</span>
      </div>
      <router-link :to="'/register'" class="btn-a">
        <span>注册账号</span>
      </router-link>
      <i class="icon iconfont icon-line"></i>
      <router-link :to="'/login'" class="btn-a">
        <span>密码登录</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      code: ''
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    getCode () {
      //启动倒计时
      alert('------')
      //发送ajax请求（向指定手机号发送验证码短信）
    }
  }
};
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
.app {
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  background: -webkit-linear-gradient(90deg, #4388f0, #626ee4);
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(90deg, #4388f0, #626ee4);
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(90deg, #4388f0, #626ee4);
  /* Firefox 3.6 - 15 */
  background: linear-gradient(90deg, #4388f0, #626ee4);
  /* 标准的语法（必须放在最后） */
  background-size: 100% 2.5rem;

  .header {
    width: 100%;
    height: 2.4rem;

    .title {
      position: relative;
      height: 0.7rem;
      width: 100%;

      i {
        position: absolute;
        left: 0.25rem;
        top: 0.23rem;
        font-size: 0.3rem;
        color: #ffffff;
      }
    }

    .hd {
      width: 100%;
      height: 3rem;
      display: flex;

      .hd-l {
        height: 100%;
        width: 73%;
        position: relative;

        span {
          color: #fff;
          position: absolute;
          top: 0.6rem;
          left: 0.6rem;
          font-size: 0.53rem;
        }
      }

      .hd-r {
        height: 100%;
        width: 27%;
      }
    }
  }

  .bd {
    background-color: #fff;
    width: 100%;
    height: 4rem;
    border-radius: 15px 15px 0 0;
    padding-top: 25px;
    position relative
    .bd-a {
      font-size: 0.22rem;
      color: #000;
      right 0.6rem
      margin-top 0.2rem
      position absolute
    }

    .bd-item {
      margin: 0 auto;
      width: 5.55rem;
      height: 1.11rem;
      position: relative;
      border-bottom: 1px solid #ededed;

      i {
        color: #1556f5;
        font-size: 0.35rem;
      }

      .txt-sjh {
        font-size: 0.25rem;
        box-sizing: border-box;
        border: none;
        border-radius: 12px;
        text-align: left;
        color: #505050;
        width: 4rem;
        z-index: 100;
      }

      .txt-yzm {
        font-size: 0.25rem;
        box-sizing: border-box;
        border: none;
        border-radius: 12px;
        text-align: left;
        color: #505050;
        width: 2.5rem;
        z-index: 100;
      }

      .txt-mm {
        font-size: 0.25rem;
        box-sizing: border-box;
        border: none;
        border-radius: 12px;
        text-align: left;
        color: #505050;
        width: 4rem;
        z-index: 100;
      }

      .span-yzm {
        color: #cdcdcd;
        font-size: 0.25rem;
        position: absolute;
        border 0
        background-color transparent
        outline none
        right: 0.3rem;
        top: 0.62rem;
        &.right_phone {
          color #4388f0
        }
      }

      #icon-line {
        color: #e7e7e7;
      }
    }
  }

  .btn-bg {
    background-color: #fff;
    height: 0.8rem;
    width: 100%;
    position relative
    .btn-a {
      font-size: 0.22rem;
      color: #4388f0;
      position absolute
      left 2.2rem
      margin-top 0.2rem
    }
    .btn-a:nth-child(2) {
      position absolute
      left 3.3rem
      margin-top 0.2rem
    }
    i {
      color #4388f0
      font-size 0.22rem
      position absolute
      margin-top 0.2rem
      left 3.1rem
    }
    .btn {
      position: relative;
      margin: 0 auto;
      width: 3.87rem;
      height: 0.8rem;
      border-radius: 50px;
      // background-color: purple;
      background: -webkit-linear-gradient(90deg, #4388f0, #626ee4);
      /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(90deg, #4388f0, #626ee4);
      /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(90deg, #4388f0, #626ee4);
      /* Firefox 3.6 - 15 */
      background: linear-gradient(90deg, #4388f0, #626ee4);

      span {
        position: absolute;
        font-size: 0.28rem;
        color: #fff;
        top: 0.28rem;
        left: 1.7rem;
      }
    }
  }
}
</style>
