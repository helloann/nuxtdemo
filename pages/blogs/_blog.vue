<template>
  <div class="container">
    <p class="main-con">这是内容{{$route.params.blog}} dev1.0 增加</p>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return { }
  },
  validate ({ params }) {
    return !isNaN(+params.blog)
  },
  mounted() {
    console.log('$route.', this.$route.params.blog);
  },
}
</script>

<style>
.main-con{
  text-align: center;
  padding: 100px;
  margin: 0 auto;
}
</style>
