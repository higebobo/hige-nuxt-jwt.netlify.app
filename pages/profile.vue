<template>
  <div>
    <h1>こんにちは、{{ loggedInUser.name }}さん！！</h1>
  </div>
</template>

<script>
export default {
  middleware: 'auth',//追加
  computed: {
   loggedInUser () {
     return this.$auth.user
   },
  }
}
</script>

<style>
</style>
