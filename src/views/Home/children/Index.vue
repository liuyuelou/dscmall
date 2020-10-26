<!--  -->
<template>
  <div class="home-index">
    <div class="swipe-wrap">
      <Swipe />
    </div>
    <QuickNav />
    <SwipeNews />
    <div class="box">
      <img src="https://x.dscmall.cn/storage/data/gallery_album/original_img/CPvH5WHHbF0EoG9XjRQbbT3knMVCeEt9DlYGQhJM.png?imageView2/2/format/webp" alt>
    </div>
    <SwipeList :swipeListDatas="swipeListDatas" />
    <MiaoSha />
    <TabQ/>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from "../../../components/Swipe";
import QuickNav from "../components/QuickNav";
import SwipeNews from "../components/SwipeNews";
import MiaoSha from "../components/MiaoSha";
import SwipeList from "../components/SwipeList";
import TabQ from "../components/TabQ"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    SwipeNews,
    MiaoSha,
    SwipeList,
    TabQ
  },
  data() {
    //这里存放数据
    return {
      swipeListDatas: [
        {
          id: 1,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机1",
        },
        {
          id: 2,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机2",
        },
        {
          id: 3,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机3",
        },
        {
          id: 4,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机4",
        },
        {
          id: 5,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机5",
        },
        {
          id: 6,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机6",
        },
        {
          id: 7,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机7",
        },
        {
          id: 8,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机8",
        },
        {
          id: 9,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机9",
        },
        {
          id: 10,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg",
          title: "吹风机10",
        },
      ],
    };
  },
};
</script>
<style lang="less">
.swipe-wrap {
  margin: 0 10px;
  div {
    border-radius: 10px !important;
  }
}
.box{
  width: 100%;
  box-sizing: border-box;
  img{
    width: 36rem;
    height: 18rem;
    position: relative;
    left: 50%;
    margin-left: -18rem;
    margin-bottom: 2rem;
  }
}
</style>