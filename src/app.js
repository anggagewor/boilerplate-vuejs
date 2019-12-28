require('./bootstrap')
const crypto = require('crypto')
const key = crypto.randomBytes(16).toString('hex')
window.Vue = require('vue')
import VueSweetalert2 from 'vue-sweetalert2'
import router from './router'
Vue.use(VueSweetalert2)

const app = new Vue({
  el: '#app',
  router,
  mounted() {
    console.log(key)
    this.setCrypto()
  },
  methods: {
    setCrypto() {
      let storAge = localStorage.getItem('__token_')
      if (!storAge) {
        localStorage.setItem('__token_', JSON.stringify({ key: key }))
      }
    }
  }
})
