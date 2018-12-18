<template>
  <div id="app" class="app">
    <HeaderTop title="订单"></HeaderTop>
    <div class="nav">
      <div class="nav-item">
        <span>全部</span>
      </div>
      <div class="nav-item">
        <span>待出行</span>
      </div>
      <div class="nav-item">
        <span>待支付</span>
      </div>
      <div class="nav-item">
        <span>被取消</span>
      </div>
      <div class="nav-item">
        <span>退款</span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  components: {
    HeaderTop
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.app {
  min-width: 320px;
  max-width: 640px;
  

  .nav {
    display: flex;
    width: 100%;
    height: 0.8rem;
    background-color: #fff;

    .nav-item {
      width: 20%;
      position relative
      span {
        font-size: 0.24rem;
        color: #4c4c4c;
        position absolute
        top 0.28rem
        left 0.25rem
      }
    }
  }
}
</style>
