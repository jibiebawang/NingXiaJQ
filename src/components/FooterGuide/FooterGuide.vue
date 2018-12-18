<template>
  <footer class="footer">
    <div class="guide-item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
      <i class="icon iconfont icon-home"></i>
      <span>首页</span>
    </div>
    <div class="guide-item" @click="goto('/order')" :class="{on: isCurrent('/order/orderall')}">
      <i class="icon iconfont icon-icon--copy"></i>
      <span>订单</span>
    </div>
    <div class="guide-item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
      <i class="icon iconfont icon-wode"></i>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
    isCurrent(path) {
      // console.log(this.$route.path)
      // console.log(path)
      // console.log('----------------')
      return this.$route.path === path;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
/* 引入公共样式 */
.footer {
  position: fixed;
  z-index: 100;
  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0 0 10px rgba(49, 52, 56, 0.3);
  justify-content: space-between;
  height: 0.85rem;
  width: 100%;
  display: flex;
  background-color: #fff;

  .guide-item {
    position: relative;
    width: 33%;

    i {
      position: absolute;
      font-size: 0.42rem;
      left: 0.89rem;
      top: 0.1rem;
    }

    span {
      position: absolute;
      font-size: 0.2rem;
      left: 0.9rem;
      top: 0.6rem;
    }

    &.on {
      color: #4388f0;
    }
  }
}
</style>
