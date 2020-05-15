<template>
  <div>
    <!-- 预留位置-->
    <div class="text-center">
      <b-table :busy="busy"
               bordered="true"
               hover="true"
               fixed="true"
               :items="comments"
               head-variant="none"
               table-variant="none"
               class="index text-center">
      </b-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bbs-comment",
    // ES6写法，即 key 名称与传入参数名称重复即可省略
    props: [
      'busy',
      'comments',
    ]
  }
</script>

<style scoped>

</style>
