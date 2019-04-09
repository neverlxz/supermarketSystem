<template>
    <div class="accountadd">
       <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h3 class="title">添加账号</h3>
        </div >

        <div class="formBox">
        <!-- 表单框 -->
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
                <!-- 用户组选择 -->
                  <el-select label="级别分类" v-model="loginForm.value" placeholder="请选择用户组">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>


                <el-form-item>
                    <el-button type="primary" @click="submitForm()">添加</el-button>
                </el-form-item>

            </el-form>
        
        </div>
        </el-card>

    </div>
</template>
<script>
export default {
    data(){
        return {
            loginForm:{
                account:"",
                password:"",
                checkPass:""
                
            },
            options:[
                {
                    label:"超级管理员",
                    value:"超级管理员"
                },
                {
                    label:"普通管理员",
                    value:"普通管理员"
                }
            ],
            rules:{
                account:[
                    {}
                ],
                password:[{

                }],
                checkPass:[{

                }]
            }
        }
    },
    methods:{
        submitForm(){

        }
    }
    
}
</script>
<style lang="less">
    @import "./accountAdd.less";
</style>

