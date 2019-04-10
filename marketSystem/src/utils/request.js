/* 对axios的封装函数 */
//引入axios
import axios from "axios";
//引入qs
import qs from "qs";
import { resolve } from "url";

// 设置请求的服务器根目录
axios.defaults.baseURL ='http://127.0.0.1:666';

//导出请求对象

export default{
    get (url,params={}){
        return new Promise((resolve,reject)=>{
            axios.get(url,{
                params
            })
            .then(response=>{
                resolve(response.data)
            })
            .catch(err=>{
                reject(err);
            })
        })
    },
    post(url,params={}){
        return new Promise((resolve,reject)=>{
            axios.post(url,qs.stringify(params))
            .then(response=>{
                resolve(response)
            })
            .catch(err=>{
                reject(err);
            })
        })
    }
}