<template>
  <div>
    <bbs-nav-bar></bbs-nav-bar>
    <alert :error="error" :error-info="errorInfo"></alert>
    <b-table :busy="busy"
             bordered="true"
             hover="true"
             fixed="true"
             :items="post.postTitle"
             head-variant="none"
             table-variant="none"
             class="index text-center">
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="prePage"
      aria-controls="post"
      class="index"
    ></b-pagination>
    <bbs-footer></bbs-footer>
  </div>
</template>

<script>
  import request from '@/utils/request'
  import BbsNavBar from '@/components/header/NavBar';
  import BbsFooter from '@/components/footer/footer';
  import Alert from '@/components/alert';

  export default {
    name: "index",
    components: {
      Alert,
      BbsFooter,
      BbsNavBar
    },
    data: function () {
      return {
        post: {
          postTitle: "",
          start: 0,
          end: 0
        },
        busy: true,
        prePage: 30,
        currentPage: 1,
        error: false,
        errorInfo: ''
      }
    },
    created: async function () {
      let tmp = await request.postTitle(this.post.start, this.post.end);
      try {
        this.post.postTitle = JSON.parse(tmp)
      } catch (e) {
        this.error = true;
        this.errorInfo = tmp
      }
    },
    mounted: function () {
      this.busy = !this.busy;
    },
    methods: {
      rows: function () {
        return this.post.postTitle.length
      }
    }
  }
</script>

<style scoped>
  .index {
    margin-top: 3%;
  }
</style>
