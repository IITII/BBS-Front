<template>
  <div>
    post
    {{ $route.params.post_id }}
    <reply-post></reply-post>
  </div>
</template>

<script>
  import ReplyPost from '../../components/replyPost';

  export default {
    name: "post",
    components: {ReplyPost},
    beforeCreate: function () {
      let regExp = new RegExp('^\\d{3}$');
      if (!regExp.match(this.$route.params.post_id)) {
        this.$router.push({
            path: '/404'
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
