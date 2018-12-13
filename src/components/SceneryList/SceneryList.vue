<template>
  <div class="itemList">
    <dl class="item" v-for="item in items" :key="item.id">
      <dt class="item-left-img">
        <img :src="item.imgUrl" alt>
      </dt>
      <dd class="item-right-msg">
        <div class="span-title">
          {{item.title}}
          <span class="span-score1">({{item.score1}})</span>
        </div>
        <span class="span-distance">{{item.distance}}</span>
        <span class="span-score2">{{item.score2}}</span>
        <i class="icon iconfont icon-line"></i>
        <span class="span-num">{{item.num}}+人消费</span>
        <span class="span-tips1">{{item.tips1}}</span>
        <span class="span-tips2">{{item.tips2}}</span>
        <span class="span-price-logo">￥</span>
        <div class="span-price-num">
          {{item.priceNum}}
          <span class="span-price-min">起</span>
        </div>
        <span class="span-address1">{{item.address1}}</span>
        <span class="span-address2">/{{item.address2}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      items: [
        {
          imgUrl: "http://localhost:8080/static/images/hlg.jpg",
          title: "北京欢乐谷",
          score1: "1A",
          distance: "1.3km",
          score2: "很好，5.0分",
          num: "100000",
          tips1: "随买随用",
          tips2: "公园游乐园",
          priceNum: "213",
          address1: "朝阳区",
          address2: "北京"
        },
        {
          imgUrl: "http://localhost:8080/static/images/hlg.jpg",
          title: "北京欢乐谷",
          score1: "1A",
          distance: "1.3km",
          score2: "很好，5.0分",
          num: "100000",
          tips1: "随买随用",
          tips2: "公园游乐园",
          priceNum: "213",
          address1: "朝阳区",
          address2: "北京"
        },
        {
          imgUrl: "http://localhost:8080/static/images/hlg.jpg",
          title: "北京欢乐谷",
          score1: "1A",
          distance: "1.3km",
          score2: "很好，5.0分",
          num: "100000",
          tips1: "随买随用",
          tips2: "公园游乐园",
          priceNum: "213",
          address1: "朝阳区",
          address2: "北京"
        },
        {
          imgUrl: "http://localhost:8080/static/images/hlg.jpg",
          title: "北京欢乐谷",
          score1: "1A",
          distance: "1.3km",
          score2: "很好，5.0分",
          num: "100000",
          tips1: "随买随用",
          tips2: "公园游乐园",
          priceNum: "213",
          address1: "朝阳区",
          address2: "北京"
        },
        {
          imgUrl: "http://localhost:8080/static/images/hlg.jpg",
          title: "北京欢乐谷",
          score1: "1A",
          distance: "1.3km",
          score2: "很好，5.0分",
          num: "100000",
          tips1: "随买随用",
          tips2: "公园游乐园",
          priceNum: "213",
          address1: "朝阳区",
          address2: "北京"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.itemList {
  .item {
    position: relative;
    height: 1.6rem;
    width: 100%;
    display: flex;

    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 200%;
      height: 200%;
      transform: scale(0.5, 0.5);
      transform-origin: left top;
      border: 1px solid #c0c0c0;
      border-left: none;
      border-right: none;
      // border-top: none;
      border-bottom: none;
      box-sizing: border-box;
    }

    .item-left-img {
      width: 36%;
      height: 100%;
      position: relative;

      img {
        position: absolute;
        left: 0.25rem;
        top: 0.2rem;
        width: 2.09rem;
        height: 1.26rem;
        border-radius: 5px;
      }
    }

    .item-right-msg {
      width: 64%;
      height: 100%;
      position: relative;

      .span-title {
        position: absolute;
        left: 0.18rem;
        top: 0.25rem;
        font-size: 0.19rem;
        color: #3c3c3c;
      }

      .span-score1 {
        margin-left: 0rem;
        margin-top: -0.26rem;
        font-size: 0.19rem;
        color: #3c3c3c;
      }

      .span-score2 {
        position: absolute;
        left: 0.18rem;
        top: 0.54rem;
        font-size: 0.15rem;
        color: #2e79f0;
      }

      .span-distance {
        position: absolute;
        right: 0.27rem;
        top: 0.25rem;
        color: #6e6e6e;
        font-size: 0.12rem;
      }

      i {
        position: absolute;
        left: 1.22rem;
        top: 0.54rem;
        font-size: 0.15rem;
        color: #6e6e6e;
      }

      .span-num {
        position: absolute;
        left: 1.42rem;
        top: 0.54rem;
        font-size: 0.15rem;
        color: #6e6e6e;
      }

      .span-tips1 {
        font-size: 0.12rem;
        color: #2e79f0;
        border: 1px solid #2e79f0;
        position: absolute;
        padding: 1px;
        left: 0.18rem;
        top: 0.8rem;
      }

      .span-tips2 {
        font-size: 0.12rem;
        color: #2e79f0;
        border: 1px solid #2e79f0;
        padding: 1px;
        position: absolute;
        left: 1rem;
        top: 0.8rem;
      }

      .span-price-logo {
        font-size: 0.15rem;
        color: #ff4e36;
        position: absolute;
        left: 0.18rem;
        top: 1.21rem;
      }

      .span-price-num {
        font-size: 0.24rem;
        color: #ff4e36;
        font-weight: 900;
        position: absolute;
        left: 0.41rem;
        top: 1.17rem;

        .span-price-min {
          font-size: 0.15rem;
          color: #3c3c3c;
          // position: absolute;
          // left: 0.5rem;
          // top: 0rem;
          margin-left: 0.04rem;
          font-weight: normal;
          margin-bottom: 0.2rem;
          // margin-top: -0.1rem;
        }
      }

      .span-address1 {
        font-size: 0.16rem;
        color: #6e6e6e;
        position: absolute;
        right: 0.7rem;
        top: 1.19rem;
      }

      .span-address2 {
        font-size: 0.16rem;
        color: #6e6e6e;
        position: absolute;
        right: 0.27rem;
        top: 1.19rem;
      }
    }
  }
}
</style>
