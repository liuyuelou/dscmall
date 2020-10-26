import ajax from "./ajax.js"

//定义一个全局变量==全局路径
const Base_URL = "/api"

//请求数据

//列表页
export const getGoodsList = (gid) => ajax(Base_URL + "catalog/goodslist", {
    cat_id: gid
}, "post")
export const getGoodsDetails = (kid) => ajax(Base_URL + "goods/show", {
    goods_id: kid 
}, "post")