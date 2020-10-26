<!-- 购物车 -->
<template>
  <div class="cart">
    <Head title="购物车123" :left="left" :right="right" />
    <div class="cart-content">
      <ul>
        <li v-for="(cart, index) in cartLists" :key="cart.goods_id">
          <!-- 选择框 -->
          <div class="select" @click="changeSelect(cart, index)">
            <i class="iconfont icon-danxuankuang" v-if="!cart.isSelect"></i>
            <i
              class="iconfont icon-danxuankuangxuanzhong"
              v-else
              style="color: red"
            ></i>
          </div>
          <!-- 图片部分 -->
          <div class="cart-img">
            <img :src="cart.goods_img" alt />
          </div>
          <!-- 右边内容-->
          <div class="cart-info">
            <div class="cart-title">
              {{ cart.goods_name }}
            </div>
            <div class="cart-wrap">
              <span class="price">{{ cart.shop_price }}</span>
              <div class="cart-num">
                <a href="javascript:;" @click="jianCart(index)">-</a>
                <input
                  type="Number"
                  value="1"
                  ref="val"
                  min="1"
                  @input="changeValue(index)"
                  v-model="cart.value"
                />
                <a href="javascript:;" @click="addCart(index)">+</a>
                <button
                  class="dele iconfont icon-shanchu1"
                  @click="dele(index)"
                ></button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cartFooter">
      <div class="cheackAll" @click="selectAllFn1">
        <i class="iconfont icon-danxuankuang" v-if="!selectAll"></i>
        <i
          class="iconfont icon-danxuankuangxuanzhong"
          v-else
          style="color: red"
        ></i>
        <span>全选</span>
      </div>
      <div class="priceAll">
        合计:
        <span style="color: red; font-size: 1.6rem">{{total}}</span>
      </div>
      <div class="gobuy">
        去结算:
        <span style="color: red; font-size: 1.6rem">{{count}}</span>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Head from "@/components/Head.vue";
import Footer from "../../components/Footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
    Footer,
  },
  computed: {
    cartLists() {
      return this.$store.state.carts;
    },
    selectAll() {
      return this.$store.state.checkAll;
    },
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        count += item.value;
      });
      return count;
    },
    total() {
      let totalPrice = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          totalPrice += item.value * item.shop_price;
        }
      });
      return totalPrice;
    },
  },
  data() {
    //这里存放数据
    return {
      left: true,
      right: false,
    };
  },
  //监听属性 类似于data概念
  methods: {
    selectAllFn() {
      this.selectAll = !this.selectAll;
    },
    //数字++
    addCart(index) {
      console.log(index);
      this.$store.commit("addCart", index);
    },
    //数字--
    jianCart(index) {
      console.log(index);
      this.$store.commit("jianCart", index);
    },
    //删除
    dele(index) {
      this.$store.commit("dele", index);
    },
    changeValue(index) {
      console.log(this);
      console.log(this.$refs.val[index].value);
      console.log(index);
      let val = this.$refs.val[index].value;
      this.$store.commit("changeValue", { index, val });
    },
    changeSelect(cart, index) {
      console.log(cart);
      cart.isSelect = !cart.isSelect;
      this.$store.commit("changeSelect", { cart, index });
    },
    selectAllFn1(){
      this.$store.commit("selectAllFn");
    }
  },
};
</script>
<style lang="less">
.cart-content {
  margin: 4.4rem 0 4.9rem 0;
  width: 100%;
  li {
    display: flex;
    height: 10rem;
    border-bottom: 1px solid #efefef;
    .select {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 10%;
      text-align: center;
    }
    .cart-img {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
      }
    }

    .cart-info {
      width: 65%;
      margin-left: 3%;
      margin-right: 2%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .cart-title {
        font-size: 1.2rem;
        height: 4rem;
        line-height: 2rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 1rem;
      }
      .price {
        color: red;
        font-size: 1.6rem;
        float: left;
        &::before {
          content: "￥";
        }
      }
      .cart-num {
        float: right;
        a {
          width: 2rem;
          height: 2rem;
          background: #ccc;
          text-align: center;
          line-height: 2rem;
          font-size: 1.4rem;
          float: left;
        }
        input {
          width: 3rem;
          height: 2rem;
          float: left;
          border: 1px solid #efefef;
          box-sizing: border-box;
          text-align: center;
        }
        .dele {
          background: transparent;
          margin-left: 2rem;
        }
      }
    }
  }
}
.cartFooter {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  bottom: 4.9rem;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #efefef;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  box-sizing: border-box;
  font-size: 1.4rem;
  font .gobuy {
    font-size: 1.4rem;
    background: #f44;
    width: 30%;
    text-align: center;
    color: #fff;
    line-height: 4.4rem;
    height: 4.4rem;
  }
}
</style>