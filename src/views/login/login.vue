<template>
  <div>
    <div class="background"></div>
    <div style="margin: 12% 20% 0% 20%;">
      <b-card :title="$t('bbs')" class="text-center">
        <b-form-group
          label-cols-sm="3"
          :label="$t('UserName')+': '"
          label-align-sm="right"
          label-for="username"
        >
          <b-form-input id="username" v-model="username"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          :label="$t('password')+': '"
          label-align-sm="right"
          label-for="password"
        >
          <b-form-input id="password" v-model="password"></b-form-input>
        </b-form-group>
        <alert :error="error" :error-info="errorInfo"></alert>
        <b-form-group class="text-center">
          <b-button variant="primary" @click="login" style="margin-right: 3%;">{{ $t('submit') }}</b-button>

          <b-button variant="outline-warning" @click="forgot">{{ $t('forget_password') }}</b-button>
        </b-form-group>
      </b-card>
    </div>
  </div>
</template>

<script>
  import request from '@/utils/request'
  import Vue from 'vue'
  import Alert from '@/components/alert';

  export default {
    name: "login",
    components: {Alert},
    data: function () {
      return {
        username: "",
        password: "",
        error: false,
        errorInfo: ""
      }
    },
    methods: {
      login: async function () {
        let tmp = await request.auth();
        if (tmp === 1) {
          Vue.state.setUsername(this.username);
          Vue.state.setUserPassword(this.password);
          //this.$router.go(index)
        } else {
          this.error = true;
          this.errorInfo = tmp;
        }
      },
      forgot: function () {
        this.username = "";
        this.password = ""
      }
    }
  }
</script>

<style scoped>
  .alert {
    margin-top: 3%;
    margin-bottom: 3%;
  }
</style>
