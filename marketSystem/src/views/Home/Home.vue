<template>
    <div class="home">
        <el-container>

            <el-aside width="200px">
                <!-- 使用左边栏组件 -->
                <leftNav></leftNav>
            </el-aside>

            <el-container>
                <el-header>
                   <!-- 使用top组件 -->
                   <top></top>
                </el-header>
                
                <el-main>
                    <!-- 路由出口 -->
                    <router-view></router-view>
                </el-main>

                <el-footer>
                    <!-- 使用bottom组件 -->
                    <bottom></bottom>
                </el-footer>

            </el-container>
        </el-container>
    </div>
</template>
<script>
import leftNav from "@/components/leftNav/leftNav.vue"
import top from "@/components/top/top.vue"
import bottom from "@/components/bottom/bottom.vue"

export default {
    components:{
        leftNav,
        top,
        bottom
    }
}
</script>
<style lang="less">
    @import "./home.less";
</style>