//封装一个请求数据的方法，对Axios的二次封装
import axios from "axios";
export default function ajax(url = "", params = {}, type = "get") {
    //1.定义promise对象
    let promise
    return new Promise((resolve, reject) => {
        //2.判断一下请求方式
        //例 params={size:10,page:1} //size=10&page=1
        if ("get" === type) {
            let paramsStr = ""
            // Object.keys(params) ["size","page"]
            Object.keys(params).forEach(key => {
                paramsStr += key + "=" + params[key] + "&"
            })
            if (paramsStr !== "") {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&")) //结果为size=10&page=1
            }
            //拼接url的完整路径
            url += "?" + paramsStr
            promise = axios.get(url)
        } else if ("post" === type) {
            promise = axios.post(url, params)
        }
        //返回请求结果
        promise.then((response) => {
            resolve(response.data)
        }).catch((err => {
            reject(err)
        }))
    })
}