import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Home from "./components/Home";
import Promotion from "./components/Promotion";
import Casino from "./components/Casino";


const routes = [
  { path: '/', component: Home },
  { path: '/casino', component: Casino },
  { path: '/promotion', component: Promotion }
];


const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
