<template>
  <div class="container">
    <div class="bm-sider">这是侧边栏</div>
    <div class="bm-con">{{content}}</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return { content: '这是纠纷调解' }
  },
  mounted(){
    this.$myInjectedFunction('这是纠纷调解页面')
  }
}
</script>

<style>
</style>
