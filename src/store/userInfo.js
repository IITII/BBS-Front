'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import {mapState} from 'vuex';

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    debug: true,
    username: '',
    password: ''
  },
  mutations: {
    setUsername(state, username) {
      if (this.debug)
        console.log('setUsernameAction triggered with', username);
      state.username = username;
    },
    setUserPassword(state, password) {
      if (this.debug)
        console.log('setUserPassword triggered with', password);
      state.password = password;
    },
    clearUsernameAction(state) {
      if (this.debug)
        console.log('clearUsernameAction triggered');
      state.username = '';
    },
    clearPasswordAction(state) {
      if (this.debug)
        console.log('clearPasswordAction triggered');
      state.password = '';
    }
  },
  getters: {
    getUserInfo: state => {
      return state
    }
  },
  computed: mapState([
    'username',
    'password'
  ])
})

export default store;
