<template>
  <div id="header">
    <h1 v-on:click="clickHello">{{ message }}</h1>
  </div>
</template>

<script>
import AV from 'leancloud-storage'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      message: 'Hello World!'
    }
  },

  methods: {
    clickHello () {
      var Hello = AV.Object.extend('Hello')
      var hello = new Hello()
      hello.set('message', this.message)
      hello.save().then(hello => {
        this.message = hello.id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
