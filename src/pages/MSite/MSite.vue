<template>
  <div id="app">
    <HeaderTop title="首页"></HeaderTop>
    <div class="srch">
      <div class="srch-wrap">
        <i class="icon iconfont icon-fangdajing" id="bthSrch"></i>
        <input type="text" v-model="search" placeholder="请输入景点名称" class="srch-txt" id="srchTxt">
      </div>
      <div class="srch-btn">
        <a @click="srch">搜索</a>
      </div>
    </div>

    <div class="SwiperBd">
      <mt-swipe :auto="3000" class="swipt">
        <mt-swipe-item v-for="imgitem in imgitems" :key="imgitem.id" class="swipt-item">
          <a :href="imgitem.href">
            <img :src="imgitem.url" class="img">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="channel">
      <ul class="channel-col">
        <li class="channel-col-item">
          <img src="./img/自然风光.png" alt>
          <span>自然风光</span>
        </li>
        <li class="channel-col-item">
          <img src="./img/亲子娱乐.png" alt>
          <span>亲子娱乐</span>
        </li>
      </ul>
      <ul class="channel-col">
        <li class="channel-col-item">
          <img src="./img/人文古迹.png" alt>
          <span>人文古迹</span>
        </li>
        <li class="channel-col-item">
          <img src="./img/避暑休闲.png" alt>
          <span>避暑休闲</span>
        </li>
      </ul>
      <ul class="channel-col">
        <li class="channel-col-item">
          <img src="./img/影视基地.png" alt>
          <span>影视基地</span>
        </li>
        <li class="channel-col-item">
          <img src="./img/温泉滑雪.png" alt>
          <span>温泉滑雪</span>
        </li>
      </ul>
      <ul class="channel-col">
        <li class="channel-col-item">
          <img src="./img/水上乐园.png" alt>
          <span>水上乐园</span>
        </li>
        <li class="channel-col-item">
          <img src="./img/博物馆.png" alt>
          <span>博物馆</span>
        </li>
      </ul>
      <ul class="channel-col">
        <li class="channel-col-item">
          <img src="./img/主题乐园.png" alt>
          <span>主题乐园</span>
        </li>
        <li class="channel-col-item">
          <img src="./img/全部景点.png" alt>
          <span>全部景点</span>
        </li>
      </ul>
    </div>
    <div class="nav-sort">
      <div class="sort-item">
        <span @click.stop="func">全部城市</span>
        <i class="icon iconfont icon-qianjin-copy" v-if="!tarch"></i>
        <i class="icon iconfont icon-fanhui-copy-copy-copy" v-else></i>
      </div>
      <div class="sort-item">
        <span @click.stop="funcSort">综合排序</span>
        <i class="icon iconfont icon-qianjin-copy" v-if="!tarchSort"></i>
        <i class="icon iconfont icon-fanhui-copy-copy-copy" v-else></i>
      </div>
      <div class="sort-item">
        <span @click.stop="funcBook">预定时限</span>
        <i class="icon iconfont icon-qianjin-copy" v-if="!tarchBook"></i>
        <i class="icon iconfont icon-fanhui-copy-copy-copy" v-else></i>
      </div>
    </div>
    <div v-if="tarch">
      <City/>
    </div>
     <div v-if="tarchSort">
      <Sort/>
    </div>
     <div v-if="tarchBook">
      <PreTime/>
    </div>
    <SceneryList></SceneryList>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import SceneryList from "../../components/SceneryList/SceneryList.vue";
import City from "../../components/City/City.vue";
import PreTime from "../../components/PreTime/PreTime.vue";
import Sort from "../../components/Sort/Sort.vue";
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";
export default {
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
    HeaderTop,
    SceneryList,
    City,
    PreTime,
    Sort
  },
  data() {
    return {
      tarch: false,
      tarchSort: false,
      tarchBook: false,
      search: "",
      imgitems: [
        {
          href: "http://baidu.com",
          url: "http://localhost:8080/static/images/1.jpg"
        },
        {
          href: "http://baidu.com",
          url: "http://localhost:8080/static/images/2.jpg"
        },
        {
          href: "http://baidu.com",
          url: "http://localhost:8080/static/images/3.jpg"
        },
        {
          href: "http://baidu.com",
          url: "http://localhost:8080/static/images/4.jpg"
        }
      ]
    };
  },
  methods: {
    srch() {
      console.log("----------");
    },
    func() {
      if (this.tarch === true) {
        this.tarch = false;
      } else {
        this.tarch = true;
        this.tarchSort = false;
        this.tarchBook = false;
      }
    },
    funcSort() {
      if (this.tarchSort === true) {
        this.tarchSort = false;
      } else {
        this.tarchSort = true;
        this.tarch = false;
        this.tarchBook = false;
      }
    },
    funcBook() {
      if (this.tarchBook === true) {
        this.tarchBook = false;
      } else {
        this.tarchBook = true;
        this.tarch = false;
        this.tarchSort = false;
      }
    },
    functo() {
      this.tarch = false;
      this.tarchSort = false;
      this.tarchBook = false;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app {
  padding-bottom: 50px;
  background-color #fff
}

.srch {
  margin: 0 auto;
  margin-top: 10px;
  width: 5.9rem;
  height: 27px;
  // background-color: purple;
  display: flex;
  justify-content: space-between;

  .srch-wrap {
    width: 90%;
    height: 100%;
    background-color: #f2f2f2;
    border-radius: 12px;
    position: relative;

    i {
      font-size: 15px;
      color: #505050;
      position: absolute;
      left: 10px;
      top: 6px;
      z-index: 100;
    }

    .srch-txt {
      position: absolute;
      left: 10px;
      top: 5px;
      margin: 0;
      width: 90%;
      font-size: 13px;
      box-sizing: border-box;
      border: none;
      border-radius: 12px;
      // line-height: 27px;
      text-align: left;
      padding-left: 1.6em;
      color: #505050;
      background-color: #f2f2f2;
    }
  }

  .srch-btn {
    width: 8%;
    height: 100%;
    position: relative;

    // background-color: pink;
    a {
      font-size: 12px;
      color: #4485f0;
      // line-height: 27px;
      position: absolute;
      left: 1px;
      top: 9px;
    }
  }
}

.SwiperBd {
  margin: 0 auto;
  margin-top: 10px;
  width: 5.9rem;
  height: 2.4rem;
  // background-color: purple;
  border-radius: 10px;

  .swipt {
    .swipt-item {
      a {
        .img {
          width: 5.9rem;
          height: 2.4rem;
          border-radius: 10px;
        }
      }
    }
  }
}

.channel {
  display: flex;
  justify-content: space-between;
  width: 5.9rem;
  height: 2.66rem;
  margin: 0 auto;
  margin-top: 5px;

  .channel-col {
    width: 1.05rem;
    height: 100%;

    // background-color: purple;
    .channel-col-item {
      width: 100%;
      height: 1.3rem;
      position: relative;

      img {
        position: absolute;
        top: 0.11rem;
        left: 0.14rem;
        width: 0.77rem;
        width: 0.77rem;
      }

      span {
        position: absolute;
        top: 1.02rem;
        left: 0.14rem;
        font-size: 0.19rem;
      }
    }
  }
}

.nav-sort {
  width: 100%;
  height: 0.55rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 10px;

  .sort-item {
    position: relative;
    height: 100%;
    width: 33%;
    background-color: #fff;

    span {
      position: absolute;
      left: 0.5rem;
      top: 0.17rem;
      color: #666666;
      font-size: 0.24rem;
    }

    i {
      position: absolute;
      left: 1.52rem;
      top: 0.17rem;
      color: #666666;
      font-size: 0.24rem;
    }
  }
}
</style>
