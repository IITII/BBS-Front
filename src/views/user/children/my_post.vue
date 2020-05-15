<template>
  <div class="text-center">
    <b-table :busy="busy"
             bordered="true"
             hover="true"
             fixed="true"
             :items="items"
             head-variant="none"
             table-variant="none"
             class="index text-center">
    </b-table>
  </div>
</template>

<script>
  export default {
    name: "my_post",
    data: function () {
      return {
        busy: true,
        items: []
      }
    },
    created: function () {
      // get data from api
      this.item = []
      if (this.item.length !== 0)
        this.busy = false
    }
  }
</script>

<style scoped>

</style>
