<!--  -->
<template>
  <div class="search">
    <!-- 头部 -->
    <div class="search-header">
      <header>
        <a
          href="javascript:;"
          class="iconfont icon-jiantou3"
          onclick="window.history.back()"
        ></a>
        <form action>
          <input type="search" placeholder="请输入关键字" v-model="keywords" />
          <i class="iconfont icon-sousuo2"></i>
        </form>
        <a href="javascript:;" style="font-size" @click="searchKeywords"
          >搜索</a
        >
      </header>
    </div>
    <!-- 最近搜索 -->
    <div class="search-wrap">
      <div class="search-wrap-title">
        <div class="search-title">最近搜索</div>
        <div class="iconfont icon-shanchu"></div>
      </div>
      <ul class="search-list">
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
      </ul>
    </div>

    <!-- 热搜 -->
    <div class="search-wrap" style="margin-top: 1rem">
      <div class="search-wrap-title">
        <div class="search-title">热搜</div>
      </div>
      <ul class="search-list">
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/Footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      keywords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //方法集合
  methods: {
    searchKeywords() {
      if (this.keywords) {
        this.$store.dispatch("searchKeywords", this.keywords);
        this.$router.push("/search1");
        console.log(111);
      }
    },
  },
};
</script>
<style lang="less">
.search-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
  z-index: 99;
  header {
    display: flex;
    form {
      width: 80%;
      position: relative;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #ccc;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        text-indent: 10px;
        font-size: 1.5rem;
      }
      i {
        position: absolute;
        right: 1rem;
        top: 0;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        color: #ccc;
      }
    }
    a {
      width: 15%;
      height: 4.4rem;
      font-size: 1.6rem;
      text-align: center;
      line-height: 4.4rem;
    }
  }
}
.search-wrap {
  margin-top: 6rem;
  .search-wrap-title {
    display: flex;
    height: 4.4rem;
    line-height: 4.4rem;
    justify-content: space-between;
    margin: 0 10px;
    .search-title {
      font-size: 1.4rem;
    }
  }
  .search-list {
    display: flex;
    justify-content: space-start;
    flex-wrap: wrap;
    li {
      width: 20%;
      height: 3rem;
      background: #efefef;
      line-height: 3rem;
      text-align: center;
      margin: 1% 2.5%;
      box-sizing: border-box;
      border-radius: 3px;
    }
  }
}
</style>