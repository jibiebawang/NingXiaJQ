<template>
  <div id="app" class="app">
    <header class="header">
      <div class="title">
        <span>我的</span>
      </div>
      <div class="hd">
        <div class="hd-l">
          <router-link :to="'/login'" class="profile-link">
            <span>登录/注册</span>
          </router-link>
        </div>
        <div class="hd-r">
          <div class="img-bd">
            <img src="./img/profile.png" alt>
          </div>
        </div>
      </div>
    </header>
    <div class="bd">
      <div class="bd-item">
        <i class="icon iconfont icon-xin" id="bd-item-i-l"></i>
        <span>订单查询</span>
        <i class="icon iconfont icon-fanhui" id="bd-item-i-order"></i>
      </div>
      <div class="bd-item">
        <i class="icon iconfont icon-wodepingjia" id="bd-item-i-l"></i>
        <span>我的评价</span>
        <i class="icon iconfont icon-fanhui" id="bd-item-i-evaluation"></i>
      </div>
      <div class="bd-item">
        <i class="icon iconfont icon-wodexiaoxi" id="bd-item-i-l"></i>
        <span>我的消息</span>
        <i class="icon iconfont icon-fanhui" id="bd-item-i-msg"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
    height: 3.2rem;

    .title {
      position: relative;
      height: 0.7rem;
      width: 100%;

      span {
        position: absolute;
        left: 2.9rem;
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
          left: 0.34rem;
          font-size: 0.4rem;
        }
      }

      .hd-r {
        height: 100%;
        width: 27%;

        .img-bd {
          position: relative;
          top: 0.6rem;
          width: 1.23rem;
          height: 1.23rem;
          border-radius: 1.23rem;
          background-color: #fff;

          img {
            position: absolute;
            left: 0.05rem;
            top: 0.05rem;
            width: 1.13rem;
            height: 1.13rem;
            border-radius: 1.13rem;
          }
        }
      }
    }
  }

  .bd {
    background-color: #fff;
    border-radius: 15px 15px 0 0;

    .bd-item {
      width: 100%;
      height: 1.1rem;
      position: relative;

      span {
        color: #505050;
        font-size: 0.25rem;
        position: absolute;
        left: 1.3rem;
        top: 0.7rem;
      }

      #bd-item-i-order {
        position: absolute;
        right: 0.4rem;
        top: 0.7rem;
      }

      #bd-item-i-evaluation {
        position: absolute;
        right: 0.4rem;
        top: 0.7rem;
      }

      #bd-item-i-msg {
        position: absolute;
        right: 0.4rem;
        top: 0.7rem;
      }

      #bd-item-i-l {
        position: absolute;
        left: 0.46rem;
        top: 0.7rem;
        font-size: 0.32rem;
      }
    }
  }
}
</style>
