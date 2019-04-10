<template>
    
    <div class="systeminfo">
        <el-card class="box-card">
            <!-- 头部 -->
            <div slot="header" class="clearfix header" >
                <h3>系统信息</h3> 
            </div>

             <!-- 消息提示 -->
            <div class="tips">
                <el-alert 
                    type="info"
                    show-icon>
                    商品总数:{{tips.goodsTotal}}。已经销售的总金额:{{ tips.totalSalesPrice}}库存商品总价：{{tips.totalInventoryPrice}}
                </el-alert>

                <el-alert
                    title="导入数据"
                    type="info"
                    show-icon
                   class="importdata"
                   @click="importData">
                </el-alert>
            </div >
            <!-- 销售排行 缺货商品 -->
            <div class="bottom">
                <el-row :gutter="40">
                    <!-- 销售排行 -->
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                   <h3>销售排行</h3>
                                </div>
                                <el-table
                                    :data="rank"
                                    stripe
                                    style="width: 100%">

                                    <el-table-column
                                    prop="rankGoodsName"
                                    label="商品名称"
                                    width="300">
                                    </el-table-column>

                                    <el-table-column
                                    prop="sales"
                                    label="销量"
                                    width="120">
                                    </el-table-column>
                                </el-table>

                            </el-card>

                        </div>
                    </el-col>

                    <!-- 缺货商品 -->
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                              <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                   <h3>缺货商品</h3>
                                </div>
                                <el-table
                                    :data="lack"
                                    stripe
                                    style="width: 100%">

                                    <el-table-column
                                    prop="name"
                                    label="商品名称"
                                    width="250">
                                    </el-table-column>

                                    <el-table-column
                                    prop="stock"
                                    label="库存"
                                    width="120">
                                    </el-table-column>

                                    <el-table-column
                                    label="操作"
                                    width="120">
                                    <span @click="enterStock()">入库</span>
                                    </el-table-column>
                                </el-table>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-card>
         

    </div>



</template>
<script>
export default {
    data(){
        return {
            tips:{
                goodsTotal:5,
                totalSalesPrice:2345.98,
                totalInventoryPrice:6759.88
            },
            rank:[
                {
                    rankGoodsName:"海飞丝",
                    sales:8
                },
                {
                    rankGoodsName:"海飞丝",
                    sales:8
                },
                {
                    rankGoodsName:"海飞丝",
                    sales:8
                },
                {
                    rankGoodsName:"海飞丝",
                    sales:8
                },
                {
                    rankGoodsName:"海飞丝",
                    sales:8
                }
            ],
            lack:[
                {
                    name:"百事可乐",
                    stock:2
                },
                 {
                    name:"百事可乐",
                    stock:2
                },
                 {
                    name:"百事可乐",
                    stock:2
                }
            ]
                
            
        }
    },
    methods:{
        importData(){

        },
        enterStock(){

        }
    }
}
</script>
<style lang="less">
    @import "./systeminfo.less";
</style>