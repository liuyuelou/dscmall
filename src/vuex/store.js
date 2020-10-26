import Vue from "Vue";
import Vuex from "Vuex";
Vue.use(Vuex) //使用vuex

//导入模块
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
//实例化一个vuex仓库
const store = new Vuex.Store({
    state,
    mutations,
    actions
})

//暴露
export default store