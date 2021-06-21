import Vue from 'vue'
import app from './app.vue'
import router from './router';
import VueSmoothScroll from 'vue2-smooth-scroll'
import './style/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSmoothScroll)

const debug = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = debug;

Vue.mixin({
  methods: {
    $clone: require('rfdc')({ proto: true }),
  }
})

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')

