<template>
  <b-alert v-if="error" class="alert">{{ errorInfo }}</b-alert>
</template>

<script>
  // 自定义组件，使用 prop 进行传参
  export default {
    name: "alert",
    // ES6写法，即 key 名称与传入参数名称重复即可省略
    // error: error 等效于 'error'
    props: [
      'error',
      'errorInfo'
    ]
  }
</script>

<style scoped>
  .alert {
    margin-top: 3%;
    margin-bottom: 3%;
  }
</style>
