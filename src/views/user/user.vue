<template>
  <div>
    <bbs-nav-bar></bbs-nav-bar>
    <success :success="userState.success" :info="userState.info"></success>
    <div>
      <b-container fluid="fluid">
        <b-row class="text-center">
          <b-avatar v-if="avatar.trim().length === 0" :src="avatar"></b-avatar>
        </b-row>
        <b-row>
          {{ username }}
        </b-row>
        <b-row>
          {{ dec }}
        </b-row>
        <b-row>
          <b-col>
            <router-link to="like">{{ $t('liked') }}</router-link>
          </b-col>
          <b-col>
            <router-link to="fans">{{ $t('fans') }}</router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <router-link to="my_post">{{ $t('myPost') }}</router-link>
          </b-col>
          <b-col>
            <router-link to="com_mag">{{ $t('commentManager') }}</router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <router-link to="my_fav">{{ $t('collected') }}</router-link>
          </b-col>
        </b-row>
      </b-container>
      <router-view></router-view>
    </div>
    <bbs-footer></bbs-footer>
  </div>
</template>

<script>
  import BbsFooter from '../../components/footer/footer';
  import BbsNavBar from '../../components/header/NavBar';
  import Alert from '../../components/alert';
  import Success from '../../components/success';

  export default {
    name: "user",
    components: {Success, Alert, BbsNavBar, BbsFooter},
    beforeCreate: function () {
      // get data from api
      this.avatar = ''
      this.data = {}
    },

    data: function () {
      return {
        avatar: '',
        username: '',
        dec: '',
        userState: {
          success: false,
          info: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
