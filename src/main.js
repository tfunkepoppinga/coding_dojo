import Vue from 'vue'
import App from './App.vue'
import Multiselect from "vue-multiselect";

Vue.config.productionTip = false
// register globally
Vue.component('multiselect', Multiselect)

new Vue({
  render: h => h(App),
}).$mount('#app')
