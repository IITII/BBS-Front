<template>
  <div>
    <p>Nav bar</p>
    <div>
      <b-nav pills>
        <b-img :src='require("../../assets/images/water-glass-64.png")'></b-img>
        <b-nav-item
          v-for="(item,index) in navList"
          :key="index"
          :herf="item.path"
          :active="itemActive === index"
          @click="setActive(index)"
        >
          {{ item.text }}
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'NavBar',
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
          },
          {
            path: '/logout',
            text: this.$i18n.t('logout')
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
      }
    }
  }
</script>

<style scoped>
  .-nav-item-active {
    color: red;
  }
</style>
