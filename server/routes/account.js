var express = require('express');
var router = express.Router();

//引入数据库模块
const connection = require("./connection/connect");

/* 同意设置响应头 */
router.all("*", (req, res, next) => {
    //设置响应头解决跨域
    res.setHeader("Access-Control-Allow-Origin", "*")
    //放行
    next();
})

/* 添加账号路由 */
router.post("/accountadd",(req,res)=>{
    //接参数
    let {account,password,user_group}=req.body;
    //写sql
    const sqlStr=`insert into account (account,password,user_group) values("${account}","${password}","${user_group}")`;
    //执行
    connection.query(sqlStr,(err,data)=>{
        if (err) throw err;
        //判断是否添加到数据库成功
        if(data.affectedRows>0){
            res.send({code:0,reason:"添加账号成功"})
        }else{
            res.send({code:1,reason:"添加账号失败"})
        }
    })
})

//请求账号列表路由
router.get('/accountlist',(req,res)=>{
    //写入sql
    const sqlStr=`select * from account `
    //执行sql
    connection.query(sqlStr,(err,data)=>{
        if (err) throw err;
        res.send(data);
    })
})


module.exports = router;