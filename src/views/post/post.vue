<template>
  <div>
    <bbs-nav-bar></bbs-nav-bar>
    <div>
      <div>
        <b-container fluid="fluid">
          <b-row>
            <b-col>
              {{ post.title }}
            </b-col>
            <b-col>
              {{ post.content }}
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div>
        <reply-post></reply-post>
        <bbs-comment :busy="comments.busy" :comments="comments.items"></bbs-comment>
      </div>
    </div>
    <bbs-footer></bbs-footer>
  </div>
</template>

<script>
  import ReplyPost from '../../components/replyPost';
  import BbsComment from '../../components/bbs-comment';
  import BbsNavBar from '../../components/header/NavBar';
  import BbsFooter from '../../components/footer/footer';

  export default {
    name: "post",
    components: {BbsFooter, BbsNavBar, BbsComment, ReplyPost},
    data: function () {
      return {
        comments: {
          busy: true,
          items: []
        },
        post: {
          title: '',
          content: ''
        }
      }
    },
    beforeCreate: function () {
      let regExp = new RegExp('^\\d{3}$');
      if (!regExp.match(this.$route.params.post_id)) {
        this.$router.push({
            path: '/404'
          }
        )
      }
      // get data by param post_id from Restful api
    },
    methods: {
      // 获取评论
      getComments: function () {

      }
    }
  }
</script>

<style scoped>

</style>
