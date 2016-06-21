import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

import AV from 'leancloud-storage'

AV.init({
  appId: 'Ezsiv2ydCkLXeXUKfzTSygvj-gzGzoHsz',
  appKey: 'FM7aOXocyDvuTRl0qLvV6NJp'
})
