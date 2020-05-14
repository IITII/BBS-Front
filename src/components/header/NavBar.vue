<template>
  <div>
    <div id="nav-bar">
      <b-nav pills>
        <!--        <b-img height="60%" width="64"-->
        <!--               class="img-fluid"-->
        <!--               :src="require('../../assets/images/water-glass-64.png')"></b-img>-->
        <!--        <div class="logo"></div>-->
        <!--        <b-avatar rounded=""-->
        <!--                  :src="require('../../assets/images/water-glass-64.png')">-->
        <!--        </b-avatar>-->
        <b-nav-item :href="navList[0].path">BBS</b-nav-item>
        <b-nav-item
          v-for="(item,index) in navList"
          id="nav-items"
          :key="index"
          :herf="item.path"
          :active="itemActive === index"
          @click="setActive(index)"
        >
          {{ item.text }}
        </b-nav-item>
        <b-button variant="outline-info" class="mb-2"
                  id="logout"
                  @click="logout">
          <b-icon icon="power" aria-hidden="true"></b-icon>
          {{ this.$i18n.t('logout') }}
        </b-button>
      </b-nav>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'BbsNavBar',
    data: function () {
      return {
        isActive: false,
        itemActive: 0,
        navList: [
          {
            path: '/',
            text: this.$i18n.t('home'),
          },
          {
            path: '/newPost',
            text: this.$i18n.t('newPost'),
          },
          {
            path: '/userInfo',
            text: this.$i18n.t('userInfo'),
          }
        ]
      }
    },
    methods: {
      showAlert: () => {
        alert('alert')
      },
      preventSubmit: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) {
          event.preventDefault()
          console.log(event)
        }
        alert(message)
      },
      setActive: function (index) {
        this.itemActive = index;
      },
      logout: function () {
        console.log("logout")
      }
    }
  }
</script>

<style scoped>
  #logout {
    float: left;
  }

  #nav-bar {
    display: inline-block;
    margin-left: 5%;
    margin-right: 5%;
  }

  #nav-items {

  }
</style>
