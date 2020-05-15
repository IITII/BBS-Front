<template>
<div>
  post
  {{ $route.params.post_id }}
  <router-link to="replyPost"></router-link>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: "post"
  }
</script>

<style scoped>

</style>
