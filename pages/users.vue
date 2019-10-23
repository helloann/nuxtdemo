<template>
  <div class="container">
    <div class="bm-sider">
      <ul class="players">
        <li v-for="user in users" :key="user.id">
          <NuxtLink :to="'/users/'+user.id">
            {{ user.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="bm-con">
      <NuxtChild :key="$route.params.id" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {  }
  },
  asyncData ({ env }) {
    return { users: env.users }
  }
}
</script>

<style>
</style>
