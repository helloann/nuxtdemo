<template>
  <div class="error-wrap">
    <p v-if="error.statusCode === 404" class="info">页面不存在</p>
    <p  class="info" v-else>应用发生错误异常</p>
    <p><nuxt-link to="/">首 页</nuxt-link></p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>

<style lang="scss">
.error-wrap{
  height: calc(100vh - 141px);
  padding-top: 100px;
}
.info{
  text-align: center;
}
</style>
