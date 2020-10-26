<!-- 登录页面 -->
<template>
  <div class="login-wrap">
    <div class="login-inner">
      <div class="logo">
        <img src="@/assets/1.jpg" alt />
      </div>
      <div class="login-tab">
        <a
          href="javascript:;"
          :class="{ active: loginFlag }"
          @click="changeTab1()"
          >短信登录</a
        >
        <a
          href="javascript:;"
          :class="{ active: !loginFlag }"
          @click="changeTab2()"
          >账号登录</a
        >
      </div>
      <div class="login-content">
        <!-- 短信登录 -->
        <div v-if="loginFlag">
          <section>
            <input
              type="tel"
              placeholder="手机号"
              maxlength="11"
              v-model="phone"
            />
            <button v-if="!num" class="getcode" @click="getcodeFn">
              获取验证码
            </button>
            <button disable v-else class="getcode">已发送{{ num }}s</button>
          </section>
          <section>
            <input type="tel" placeholder="验证码" maxlength="6" />
          </section>
        </div>
        <!-- 账号登录 -->
        <div v-else>
          <section>
            <input type="tel" placeholder="用户名/邮箱/手机号" />
          </section>
          <section>
            <input
              type="password"
              v-if="hidePass"
              v-model="pass"
              placeholder="密码"
            />
            <input type="text" v-else v-model="pass" placeholder="密码" />
            <button
              v-if="hidePass"
              class="getcode iconfont icon-yincang"
              @click="showHidePass"
            ></button>
            <button
              v-else
              class="getcode iconfont icon-xianshi"
              @click="showHidePass"
            ></button>
          </section>
          <section>
            <input type="tel" placeholder="验证码" maxlength="6" />
          </section>
        </div>

        <!-- 登录按钮 -->
        <button class="login-btn">登录</button>
      </div>
    </div>
  </div>
</template> 

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginFlag: true,
      phone: "",
      pass: "",
      num: 0,
      timer: "",
      hidePass: true,
    };
  },
  computed: {
    identifyPhone() {
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },
  methods: {
    changeTab1() {
      this.loginFlag = true;
    },
    changeTab2() {
      this.loginFlag = false;
    },
    getcodeFn() {
      //获取验证码
      //判断手机号如果为true
      if (this.identifyPhone) {
        this.num = 60;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "请输入手机号",
          position: "center",
          duration: 2000,
        });
      }
    },
    showHidePass() {
      this.hidePass = !this.hidePass;
    },
  },
};
</script>
<style lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .login-inner {
    width: 85%;
    margin: 0 auto;
    .logo {
      width: 10rem;
      height: 10rem;
      border: 6px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .login-tab {
      width: 100%;
      height: 4.4rem;
      display: flex;
      margin-top: 2rem;
      justify-content: space-between;
      a {
        display: block;
        width: 45%;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        background: #ccc;
        color: #fff;
        font-size: 1.4rem;
      }
      .active {
        background: red;
        color: #fff;
      }
    }
    .login-content {
      section {
        margin-top: 1rem;
        position: relative;
        input {
          width: 100%;
          height: 4.4rem;
          border: 1px solid #ccc;
          text-indent: 1rem;
          line-height: 4.4rem;
          box-sizing: border-box;
          border-radius: 5px;
        }
        button {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          color: #666;
          font-size: 1.4rem;
        }
      }
      .login-btn {
        width: 100%;
        height: 4.4rem;
        background: red;
        display: block;
        text-align: center;
        line-height: 4.4rem;
        color: #fff;
        font-size: 1.4rem;
        border-radius: 5px;
        margin-top: 20px;
      }
    }
  }
}
</style>