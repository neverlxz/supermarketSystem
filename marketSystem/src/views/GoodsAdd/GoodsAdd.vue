<template>
    <div class="goodsadd">
         <el-card class="box-card">
            <!-- 头部 -->
            <div slot="header" class="clearfix header" >
                <h3>添加商品</h3> 
            </div>
         
                <el-form :label-position="labelPosition" label-width="100px" :model="goodsinfo" hide-required-asterisk>

                <el-form-item label="名称">
                    <el-input v-model="goodsinfo.name"></el-input>
                </el-form-item>

                <el-form-item label="活动区域">
                    <el-input v-model="goodsinfo.price"></el-input>
                </el-form-item>

                <el-form-item label="活动形式">
                    <el-input v-model="goodsinfo.shichangprice"></el-input>
                </el-form-item>

                <el-form-item label="活动形式">
                    <el-input v-model="goodsinfo.shichangprice"></el-input>
                </el-form-item>

                <el-form-item label="活动形式">
                    <el-input v-model="goodsinfo.shichangprice"></el-input>
                </el-form-item>

                <el-form-item label="活动形式">
                    <el-input v-model="goodsinfo.shichangprice"></el-input>
                </el-form-item>

                <el-form-item label="活动形式">
                    <el-input v-model="goodsinfo.shichangprice"></el-input>
                </el-form-item>

                <el-form-item label="活动形式">
                    <el-input v-model="goodsinfo.shichangprice"></el-input>
                </el-form-item>

                </el-form>
                <!-- 添加按钮 -->
                <el-button type="primary" plain>添加</el-button>
         </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
           labelPosition:"top",
           goodsinfo:{
               name:"",
               price:"",
               shichangprice:""
           }
        }
    }
}
</script>
<style lang="less">
    @import "./GoodsAdd.less";
</style>