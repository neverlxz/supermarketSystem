<template>
    <div class="login">
       <div class="login-box">
           <h3>
               <span class="el-icon-loading"></span>
               超市管理系统
           </h3>
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">

                <el-form-item label="账   号" prop="account">
                    <el-input type="text" v-model="loginForm.account" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密   码" prop="password">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="loginForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                    <el-button @click="resetForm()">重置</el-button>
                </el-form-item>

            </el-form>
       </div>
    </div>
</template>
<script>
//引入密码验证函数
import { passwordReg } from "@/utils/validator.js"

export default {

    data(){
        //确认密码自定义函数
        const confirmPassword=(rule,value,callback)=>{
            if(value===""){
                callback(new Error("确认密码不能为空"));
            }else if(value !==this.loginForm.password){
                callback(new Error("两次密码不一致"));               
            }else{
                callback(); //成功
            }
        }
        //密码自定义验证函数
        const checkPassword=(rule,value,callback)=>{
              if(value === ""){
                callback(new Error("密码不能为空"));
              }else if(!passwordReg(value)){
                  callback(new Error("以字母开头，长度在3~6之间，只能包含数字，字母，下划线"))
              }else{
                  if(this.loginForm.checkPass !==""){
                       this.$refs.loginForm.validateField('checkPass')
                  }
                  callback();
              }
        }
        return {
            loginForm:{
                account:"",
                password:"",
                checkPass:""
            },
            rules:{
                //账号
                account:[
                    {required:true,message:"请输入账号",trigger:"blur"},
                    {min:3,max:6,message:"账号长度3~6位",trigger:"blur"}
                ],
                //密码
                password:[
                    {required:true,validator:checkPassword,trigger:"blur"}
                ],
                //确认密码
                checkPass:[
                    {required:true,validator:confirmPassword,trigger:"blur"}
                ]
                
            }
        }
    },
    methods:{
        //登录
        submitForm(){
           this.$refs.loginForm.validate(valid => {
                //如果所有前端验证都通过 valid就是true 否则就是false
                if(valid){
                    let params={
                        account:this.loginForm.account,
                        password:this.loginForm.password
                    }
                    alert("登录成功");
                    //路由跳转
                    this.$router.push("/home");
                }else{
                    console.log("前端验证不通过，不允许提交");
                    return
                }
            })
        },
        //重置
        resetForm(){
            this.$refs.loginForm.resetFields()
        }
    }
}
</script>
<style lang="less">
    @import "./Login.less";
</style>