'use strict';
import axios from 'axios';
import Vue from 'vue';

const userInfo = {
  username: new Buffer(Vue.$store.getters.getUserInfo.username)
    .toString('base64'),
  password: new Buffer(Vue.$store.getters.getUserInfo.password)
    .toString('base64')
};
const service = axios.create({
  baseURL: "https://127.0.0.1/v1/",
  timeout: 5000,
  auth: userInfo,
  timeoutErrorMessage: '网络连接貌似出了点问题，请检查网络',
  proxy: null,
});
const INF = [
  'auth',
  'postTitle',
  'postDetail',
  'userDetail'
];

async function auth() {
  return await new Promise((resolve, reject) => {
    service.post(INF[0])
      .then(function (response) {
        if (response === 1) {
          return resolve(response)
        } else {
          return reject(response)
        }
      })
      .catch(e => {
        console.log(e);
        return reject(e);
      })
  })
}

async function postTitle(start, end) {
  return await new Promise((resolve, reject) => {
    service.get(INF[1],
      {
        start,
        end
      })
      .then(function (response) {
        return resolve(response)
      })
      .catch(e => {
        return reject(e);
      })
  })
}

async function postDetail(postID) {
  return await new Promise((resolve, reject) => {
    service.get(INF[2], {
      postID: postID
    })
      .then(function (response) {
        return resolve(response)
      })
      .catch(e => {
        return reject(e)
      })
  })
}

async function userDetail() {
  return await new Promise((resolve, reject) => {
    service.get(INF[3])
      .then(function (response) {
        try {
          let tmp = JSON.parse(response);
          return resolve(tmp);
        } catch (e) {
          return reject(e);
        }
      })
      .catch(e => {
        return reject(e);
      })
  })
}

export default {
  auth,
  postTitle,
  postDetail,
  userDetail
}
