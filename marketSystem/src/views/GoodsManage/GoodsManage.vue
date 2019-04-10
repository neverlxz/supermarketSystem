<template>
    <div class="goodsmanage">
         <el-card class="box-card">
            <!-- 头部 -->
            <div slot="header" class="clearfix header" >
                <h3>商品管理</h3> 
            </div>
            <!-- 搜索栏 -->
            <div class="search">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="grid-content bg-purple">
                             <el-select v-model="classifyselect" filterable placeholder="----选择分类----" style="width:150px">
                                <el-option value="日化用品" label="日化用品"></el-option>
                                <el-option value="床上用品" label="床上用品"></el-option>
                                <el-option value="食品" label="食品"></el-option>
                            </el-select>
                            <span> 关键字：</span>
                            <!-- 搜索框 -->
                             <el-select
                                v-model="searchValue"
                                multiple
                                filterable
                                remote
                                reserve-keyword
                                placeholder=""
                                :remote-method="remoteMethod"
                                >
                                
                            </el-select>
                            <span> (商品名称、条形码) </span>
                            <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        </div>
                    </el-col>    
                </el-row>
            </div>
            <hr>
            <hr>
            <div class="table">
                <el-table
                :data="tableData"
                stripe
                style="width: 100%">

                <el-table-column
                prop="index1"
                label="条形码"
                >
                </el-table-column>

                <el-table-column
                prop="index2"
                label="商品名称"
                >
                </el-table-column>

                <el-table-column
                prop="index3"
                label="所属分类">
                </el-table-column>

                  <el-table-column
                prop="index4"
                label="售价(元)">
                </el-table-column>

                  <el-table-column
                prop="index5"
                label="促销价(元)">
                </el-table-column>

                  <el-table-column
                prop="index6"
                label="市场价（元）">
                </el-table-column>

                  <el-table-column
                prop="index7"
                label="库存">
                </el-table-column>

                  <el-table-column
                prop="index8"
                label="库存总额">
                </el-table-column>

                  <el-table-column
                prop="index9"
                label="销售总额">
                </el-table-column>

                <el-table-column
                label="管理">
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-setting"></i>
                </el-table-column>

            </el-table>

            </div>
         </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            classifyselect:"",
            searchValue:'',
            tableData:[
                {
                    index1:12321234,
                    index2:"海飞丝",
                    index3:"洗发水",
                    index4:33,
                    index5:33,
                    index6:33,
                    index7:33,
                    index8:33,
                    index9:33
            
                },
                {
                    index1:12321234,
                    index2:"海飞丝",
                    index3:"洗发水",
                    index4:33,
                    index5:33,
                    index6:33,
                    index7:33,
                    index8:33,
                    index9:33
            
                },
                {
                    index1:12321234,
                    index2:"海飞丝",
                    index3:"洗发水",
                    index4:33,
                    index5:33,
                    index6:33,
                    index7:33,
                    index8:33,
                    index9:33
            
                },
                {
                    index1:12321234,
                    index2:"海飞丝",
                    index3:"洗发水",
                    index4:33,
                    index5:33,
                    index6:33,
                    index7:33,
                    index8:33,
                    index9:33
            
                },
                {
                    index1:12321234,
                    index2:"海飞丝",
                    index3:"洗发水",
                    index4:33,
                    index5:33,
                    index6:33,
                    index7:33,
                    index8:33,
                    index9:33
            
                },
            ]
        }
    },
    methods:{
        remoteMethod(){

        }
    }
}
</script>
<style lang="less">
    @import "./goodsmanage.less";
</style>