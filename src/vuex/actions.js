//actions用来提交mutations中定义的方法
// import {
//     getHomeSwipe
// } from "@/api/index.js";
import {
    getGoodsList,
    getGoodsDetails,
} from "@/api/list.js";
import {searchFn} from "@/api/search.js"
const actions = {
    actAddNum(context) {
        context.commit("addNum")
    },
    actAddNumX(context, data) {
        context.commit("addNumX", data)
    },
    // async actGetSwipeDatas(context) {
    //     const result = await getHomeSwipe
    //     context.commit("getSwipeDatas", result.data)
    // },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data)
        console.log(result.data);
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetails(context, data) {
        const result = await getGoodsDetails(data)
        console.log(result.data);
        context.commit("getGoodsDetails", result.data)
    },
    async searchKeywords(context,params){
     const result=await searchFn(params)
     console.log(result);
     context.commit("searchList",result.data)
}

}

export default actions