<template>
  <div class="cities">
    <ul>
      <li v-for="(item,index) in sorts" :key="index" @click="item.active=!item.active">
        <span>{{item.sort}}</span>
        <i class="icon iconfont icon-duigou1" v-if="item.active"></i>
      </li>
    </ul>
    <div class="btn-bg">
      <div class="btn-item">
        <button>取消</button>
      </div>
      <div class="btn-item">
        <button>确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sorts: [
        {
          sort: "综合排序",
          active: true
        },
        {
          sort: "距离最近",
          active: false
        },
        {
          sort: "评价最高",
          active: false
        },
        {
          sort: "销量最高",
          active: false
        }
      ]
    };
  },
  methods: {
    abc() {
      alert("12321312");
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.cities {
  width: 100%;
  background-color: #fff;
  z-index: 100;
  box-shadow: 0 1px 10px rgba(49, 52, 56, 0.3);

  ul {
    width: 100%;

    li {
      margin-left: 1em;
      padding-top: 0.2rem;
      background-color: #fff;
      width: 100%;
      height: 0.5rem;
      color: #666666;
      font-size: 0.24rem;
      bottom-border-1px(#e4e4e4);

      i {
        color: #4388f0;
        float: right;
        padding-right: 0.5rem;
      }
    }
  }

  .btn-bg {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;

    .btn-item {
      width: 50%;
      position relative
      button {
        color #fff
        position absolute
        top 0.05rem
        left 0.6rem
        width 2rem
        height 0.5rem
        font-size 0.24rem
        border-radius 25px
        background: -webkit-linear-gradient(90deg, #4388f0, #626ee4); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(90deg, #4388f0, #626ee4); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(90deg, #4388f0, #626ee4); /* Firefox 3.6 - 15 */
        background: linear-gradient(90deg, #4388f0, #626ee4); /* 标准的语法（必须放在最后） */
      }
    }
  }
}
</style>
