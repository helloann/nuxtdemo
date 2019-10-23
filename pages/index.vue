<template>
  <div class="container">
    <div class="bm-sider">
        {{content}}
    </div>
    <div class="bm-con">
      <ul>
        <li><nuxt-link to="blogs/1">这是文章1</nuxt-link></li>
         <li><nuxt-link to="blogs/2">这是文章2</nuxt-link></li>
         <li><nuxt-link to="blogs/3">这是文章3</nuxt-link></li>
         <!-- <li><nuxt-link to="blogs/abc">非法链接abc</nuxt-link></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return { content: 'index' }
  },
  asyncData (context) {
    return { content: '其它一些内容' }
  }
}
</script>

<style>
</style>
