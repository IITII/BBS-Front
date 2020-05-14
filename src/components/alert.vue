<template>
  <b-alert v-if="error" class="alert">{{ errorInfo }}</b-alert>
</template>

<script>
  export default {
    name: "alert",
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
