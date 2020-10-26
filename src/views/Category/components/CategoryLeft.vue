<!-- 左边菜单 -->
<template>
  <div class="category-wrap">
    <div class="category-left">
      <ul class="category-nav">
        <li v-for="list in this.$store.state.categoryDatas" :key="list.cat_id">
          <router-link :to="'/category/' + list.cat_id">
            {{ list.cat_name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      is_active: 0,
    };
  },
  methods: {
    getCategoryDatas() {
      //http://192.168.0.161:3000/api/v1/category
      Axios.get("/api/catalog/list").then((res) => {
        console.log(res.data);
        // if (res.status == 200) {
          // console.log("哈哈哈哈哈哈哈");
          this.$store.commit("getCategoryDatas", res.data.data);
        // }
      });
    },
    changeTab(index) {
      this.is_active = index;
    },
  },
  mounted() {
    this.getCategoryDatas();
    console.log(this.$store.state.categoryDatas);
  },
};
</script>
<style lang="less">
.category-wrap {
  height: 100%;
  .category-left {
    height: 100%;
    width: 8.4rem;
    overflow-y: scroll;
    background: #efefef;
    ul {
      li {
        height: 3.8rem;
        font-size: 1.4rem;
        line-height: 3.8rem;
        text-align: center;
      }
      .router-link-active {
        display: block;
        background: #fff;
        color: red;
      }
    }
  }
}
</style>