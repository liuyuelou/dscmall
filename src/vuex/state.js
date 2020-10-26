//state是 vuex中储存数据的
const state = {
    num: 1,
    categoryDatas: [], //分类--类别数据
    swipeDatas: [], //首页轮播图数据
    goodsLists: [],//产品列表
    getGoodsList: [],
    goodsDetails: [],//产品详情
    search1:[],
    carts:localStorage["carts"]?JSON.parse(localStorage["carts"]):[], //购物车数据
    //全选按按钮的状态
     checkAll:localStorage["checkAll"]?JSON.parse(localStorage["checkAll"]):false,
}

export default state