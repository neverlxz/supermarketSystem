<template>
    <div class="passwordmodify">
         <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h3 class="title">密码修改</h3>
        </div >

        <div class="formBox">
        <!-- 表单框 -->
            <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px" class="demo-ruleForm">

                <el-form-item label="原密码" prop="oldPassword">
                    <el-input type="password" v-model="editForm.oldPassword" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="新密码" prop="newPassword">
                    <el-input type="password" v-model="editForm.newPassword" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="editForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="confirmEdit">确认修改</el-button>
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
               callback(new Error("新密码不能为空"));
           }else if(!passwordReg(value)){
               callback(new Error("密码位3~6位 以字母开头"));
           }else{
               if(this.editForm.checkPass!==""){
                   //触发一致性验证
                   this.$refs.editForm.validateField("checkPass");
               }
               callback();
           }
        }
        //确认密码函数
        const checkPassword=(rulr,value,callback)=>{
            if(value===""){
                callback(new Error("请确认您的新密码"));
            }else if(value !== this.editForm.newPassword){
                callback(new Error("两次密码不一致"));
            }else{
                callback();
            }
        }
        return {
            editForm:{
                oldPassword:'',
                newPassword:'',
                checkPass:''
            },
            rules:{
                 oldPassword:[
                    {required:true,message:"请输入原密码",trigger:"blur"},
                ],
                newPassword:[
                    {required:true,message:"请输入新密码",trigger:"blur"},
                    {required:true,validator:confirmPassword,trigger:"blur"}
                ],
                checkPass:[
                    {required:true,message:"请确认新密码",trigger:"blur"},
                    {required:true,validator:checkPassword,trigger:"blur"}
                ],
            }

            
        }
    },
    methods:{
        confirmEdit(){

        }
    }
}
</script>
<style lang="less">
    @import "./passwordModify.less";
</style>