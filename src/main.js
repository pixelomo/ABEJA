// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import App from './App'
import Front from '@/components/Front'
import Cart from '@/components/Cart'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueFire)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Front},
    {path: '/cart', component: Cart}
  ]
})

new Vue({
  router,
  template: `
  	<div id="app">
  		<md-card>
  		  <md-card-content>
               <md-list class="nav">
                   <md-list-item class="md-accent">
                     <router-link to='/'>Shop</router-link>
                   </md-list-item>
                   <md-list-item class="md-accent">
                     <router-link to='/cart'>View Cart</router-link>
                   </md-list-item>
               </md-list>
  		  </md-card-content>
  		</md-card>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
