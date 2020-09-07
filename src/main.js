import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import Demo from './Demo.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(Demo),
}).$mount('#app')
