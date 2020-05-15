<template>
  <div>
    <alert :error="errorCt.error" :error-info="errorCt.errorInfo"></alert>
    <success :success="postState.success" :info="postState.info"></success>
    <b-container fluid="fluid">
      <b-row class="mt-2">
        <b-col sm="10">
          <b-form-textarea
            id="post-content"
            v-model="comment"
            :state="lengthCtrl(comment, 0)"
            :placeholder="$t('denyEmptyComment')"
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
</template>

<script>
  import Alert from './alert';
  import Success from './success';

  export default {
    name: "replyPost",
    components: {Success, Alert},
    data: function () {
      return {
        errorCt: {
          error: false,
          errorInfo: ''
        },
        comment: '',
        postState: {
          success: false,
          info: ''
        }
      }
    },
    methods: {
      push: function () {
        alert('submit data')
      },
      cancel: function () {
        this.comment = '';
      },
      lengthCtrl: function (o, limit) {
        return o.trim().length > limit;
      },
    }
  }
</script>

<style scoped>

</style>
