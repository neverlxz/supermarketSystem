<template>
    <div class="accountadd">
       <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h3 class="title">添加账号</h3>
        </div >

        <div class="formBox">
        <!-- 表单框 -->
            <el-form :model="addForm" status-icon :rules="rules" ref="addForm" label-width="100px" class="demo-ruleForm">

                <el-form-item label="账   号" prop="account">
                    <el-input type="text" v-model="addForm.account" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密   码" prop="password">
                    <el-input type="password" v-model="addForm.password" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="addForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <!-- 用户组选择 -->
                <el-form-item label="级别分类" prop="userGroup">
                    <el-select  class="selectbox" v-model="addForm.user_group" placeholder="请选择用户组">
                        <el-option label="超级管理员" value="超级管理员"></el-option>
                        <el-option label="普通用户" value="普通用户"></el-option> 
                    </el-select>       
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="submitForm()">添加</el-button>
                </el-form-item>

            </el-form>
        
        </div>
        </el-card>

    </div>
</template>
<script>

import {passwordReg} from "@/utils/validator.js"
export default {
    data(){
        //验证密码函数
        const confirmPassword=(rule,value,callback)=>{
           if(value===""){
               callback(new Error("密码不能为空"));
           }else if(!passwordReg(value)){
               callback(new Error("密码位3~6位 以字母开头"));
           }else{
               if(this.addForm.checkPass!==""){
                   //触发一致性验证
                   this.$refs.addForm.validateField("checkPass");
               }
               callback();
           }
        }
        //确认密码函数
        const checkPassword=(rulr,value,callback)=>{
            if(value===""){
                callback(new Error("请确认您设置的密码"));
            }else if(value !== this.addForm.password){
                callback(new Error("两次密码不一致"));
            }else{
                callback();
            }
        }
        return {
            addForm:{
                account:"",
                password:"",
                checkPass:"",
                user_group:""    
            },       
            rules:{
                account:[
                    {required:true,message:"请输入账号",trigger:"blur"},
                    {min:3,max:6,message:"请输入3~6位的账号哟"}
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:"blur"},
                    {required:true,validator:confirmPassword,trigger:"blur"}
                ],
                checkPass:[
                    {required:true,validator:checkPassword,trigger:"blur"}
                ],
                user_group:[
                    {required:true,message:"用户组为必选项",trigger:"change"},
                ]

            }
        }
    },
    methods:{
        submitForm(){
            //前端验证都通过
            this.$refs.addForm.validate(valid=>{
                if(valid){
                    let params={
                        account:this.addForm.account,
                        password:this.addForm.password,
                        user_group:this.addForm.user_group
                    }            
                    console.log(params)       
                        //发送axios请求
                        this.request.post("/account/accountadd",params)
                        .then(res=>{
                            console.log(res)
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                    this.$router.push("/home/accountmanage"); //跳转
                }
            })
                    alert("账号添加成功");

        }
    }
    
}
</script>
<style lang="less">
    @import "./accountAdd.less";
</style>

