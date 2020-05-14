<template>
  <div>
    <bbs-nav-bar></bbs-nav-bar>
    <alert :error="errorCt.error" :error-info="errorCt.errorInfo"></alert>
    <success :success="postState.success" :info="postState.info"></success>
    <div class="new-post">
      <b-container fluid="fluid">
        <b-row>
          <b-col sm="2">
            <label for="post-title">{{ $t('title') }}</label>
          </b-col>
          <b-col sm="10">
            <b-input id="post-title"></b-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col sm="2">
            <label for="post-content">{{ $t('content') }}</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              id="post-content"
              v-model="postDetail.context"
              :state="lengthCtrl(postDetail.context, 0)"
              :placeholder="$t('denyEmptyContent')"
              rows="3"
            ></b-form-textarea>
          </b-col>
        </b-row>
        <br>
        <b-form-group class="text-center">
          <b-button variant="primary" @click="push" style="margin-right: 3%;">{{ $t('submit') }}</b-button>

          <b-button variant="outline-warning" @click="$router.go(-1)">{{ $t('cancel') }}</b-button>
        </b-form-group>
      </b-container>
    </div>
    <bbs-footer></bbs-footer>
  </div>
</template>

<script>
  'use strict';
  import Alert from '@/components/alert';
  import request from '@/utils/request';
  import Success from '@/components/success';
  import BbsNavBar from '../../components/header/NavBar';
  import BbsFooter from '../../components/footer/footer';

  export default {
    name: "newPost",
    components: {BbsFooter, BbsNavBar, Success, Alert},
    data: function () {
      return {
        postDetail: {
          title: '',
          context: '',
          addition: ''
        },
        errorCt: {
          error: false,
          errorInfo: ''
        },
        postState: {
          success: false,
          info: ''
        }
      }
    },
    methods: {
      push: async function () {
        let res = await request.newPost(this.postDetail);
        if (res.code === 200) {
          this.postState.success = true;
          this.postState.info = res.msg;
        } else {
          this.errorCt.error = true;
          this.errorCt.errorInfo = res.msg;
        }
      },
      lengthCtrl: function (o, limit) {
        return o.trim().length > limit;
      },
      cancel: function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>
