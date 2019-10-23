<template>
  <div class="bm-header">
    <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="index"><nuxt-link to="/">首页</nuxt-link></el-menu-item>
      <!-- <el-menu-item index="dispute"><nuxt-link to="/dispute">纠纷调解</nuxt-link></el-menu-item> -->
      <el-menu-item index="users"><nuxt-link to="/users">人员介绍</nuxt-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return { 'defaultActive': 'index' }
  }
}
</script>
<style>

</style>
