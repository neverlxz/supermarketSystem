<template>
    <div class="accountmanage">
        <el-card class="box-card">
            <div slot="header" class="clearfix header" >
                <h3>账号管理</h3> 
            </div>
            <div class="table"> 
                 <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">

                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>


                    <el-table-column
                    prop="account"
                    label="账号"
                    width="200">
                    </el-table-column>

                      <el-table-column
                    prop="password"
                    label="密码"
                    width="200">
                    </el-table-column>

                    <el-table-column
                    prop="user_group"
                    label="用户组"
                    width="200"
                    >
                    </el-table-column>

                    <el-table-column
                    label="日期"
                    width="200">
                   <template slot-scope="scope">{{ scope.row.create_date | filterDate}}</template>
                    </el-table-column>

                     <el-table-column label="操作" show-overflow-tooltip>
                        <template slot-scope="scope">
                           <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 分页 -->
            <div style="margin-top:30px">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[4, 5, 6, 7]"
                :page-size="4"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
                </el-pagination>

            </div>
            <!-- 批量删除和取消选择按钮 -->
            <div class="togeter" style="margin-top:30px">
                <el-button type="danger">批量删除</el-button>
                <el-button type="success">取消选择</el-button>
            </div>
        </el-card>

    </div>
</template>
<script>
// 引入moment
import moment from 'moment';
export default {
    data(){
        return {
            tableData:[
        
            ],
        currentPage:1,
        total:20

        }
    },
    methods:{
        //点击修改
        handleEdit(){

        },
        //点击删除
        handleDelete(){

        },
        handleSizeChange(){

        },
        handleSelectionChange(){

        },
        handleCurrentChange(){

        }
    },
    //生命周期 钩子函数
    created(){
        this.request.get('/account/accountlist')
        .then(res=>{
            console.log(res);
            this.tableData= res;
        })
        .catch(err=>{
            console.log(err)
        })
    },
    filters: {
    // 过滤时间
    filterDate (time) {
      return moment(time).format('YYYY-MM-DD hh:mm:ss')
    }
  }
    
}
</script>
<style lang="less">
    @import "./Accountmanage.less";
</style>