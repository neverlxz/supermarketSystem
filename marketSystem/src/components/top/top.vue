<template>
  <div class="top">
    <el-row :gutter="20">
      <!-- 左边标题 -->
      <el-col :span="20">
        <h3>
          <span class="el-icon-menu"></span>华联超市管理系统
        </h3>
      </el-col>

      <el-col :span="4">
        <el-row>
          <!-- 头像 -->
          <el-col :span="8">
            <div class="avator">
              <img src="./dog.jpg" alt>
            </div>
          </el-col>
          <!-- 选项卡 -->
          <el-col :span="16">
              <div class="select">
                  <el-dropdown trigger = "click">
                    <span class="el-dropdown-link">
                        李大哥<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">个人中心</el-dropdown-item>
                        <el-dropdown-item command="b">退出系统</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>

              </div>
          </el-col>

        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {


}
</script>
<style lang="less">
      @import "./top.less";
</style>

