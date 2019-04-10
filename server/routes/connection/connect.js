//连接服务器

//引入mysql
const mysql=require('mysql');
console.log("打印"+mysql);

 //创建连接对象
 const connection = mysql.createConnection ({
     host: "localhost",
     user: "root",
     password:"root",
     database:"supermarket"
 })

 //执行连接方法
 connection.connect();

 console.log("数据库连接成功");

 //暴露连接模块
module.exports=connection;