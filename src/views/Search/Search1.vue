<!-- 搜索组件 -->
<template>
  <div class="search1">
    <Head title="搜索结果" :left="left" :right="right" />
    <List :lists="search1" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Head from "@/components/Head.vue";
import List from "@/components/List.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
    List,
  },
  //监听属性 类似于data概念
  computed: {
    search1() {
      return this.$store.state.search1;
    },
  },
  data() {
    //这里存放数据
    return {
      left: true,
      right: false,
    };
  },

  mounted() {
    console.log(this.$store.state.search1);
  },
};
</script>
<style>
</style>