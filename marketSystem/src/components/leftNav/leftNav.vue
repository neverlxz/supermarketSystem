<template>
    <div class="nav"> 
         <el-menu 
           :default-active="$route.path" 
            class="el-menu-vertical-demo"
            background-color="#ccc"
            text-color=""
            active-text-color="#fff"
            unique-opened
            router>

            <!-- 系统管理 -->
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>
                   系统管理
                </template>  
                <el-menu-item index="/home/systeminfo">系统信息</el-menu-item>   
            </el-submenu>

            <!-- 账号管理 -->
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-message"></i>
                   账号管理
                </template>  
                <el-menu-item index="/home/accountmanage">账号管理</el-menu-item>   
                <el-menu-item index="/home/accountadd">添加账号</el-menu-item>   
                <el-menu-item index="/home/passwordmodify">密码修改</el-menu-item>   
            </el-submenu>

            <!-- 商品管理 -->
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-message"></i>
                   商品管理
                </template>  
                <el-menu-item index="/home/goodsmanage">商品管理</el-menu-item>   
                <el-menu-item index="/home/goodsadd">添加商品</el-menu-item>   
            </el-submenu>

            <!-- 统计管理 -->
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-message"></i>
                   统计管理
                </template>  
                <el-menu-item index="/home/salestotal">销售统计</el-menu-item>   
                <el-menu-item index="/home/stocktotal">进货统计</el-menu-item>   
            </el-submenu>

         </el-menu>
    </div>
  
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    @import "./leftNav.less";
</style>

