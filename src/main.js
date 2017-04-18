// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import App from './App'
import Logo from '@/components/Logo'
import Front from '@/components/Front'
import Cart from '@/components/Cart'
import Confirmed from '@/components/Confirmed'
import Foot from '@/components/Foot'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueFire)

Vue.config.productionTip = false

Vue.material.registerTheme('default', {
  primary: 'crimson',
  accent: 'indigo',
  warn: 'red',
  background: 'grey'
})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Front},
    {path: '/cart', component: Cart},
    {path: '/confirmed', component: Confirmed}
  ]
})

new Vue({
  router,
  components: {
    'logo': Logo,
    'foot': Foot
  },
  template: `
  	<div id="app">
  		<md-card>
        <logo></logo>
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
        <router-view></router-view>
        <foot></foot>
  		</md-card>
    </div>
  `
}).$mount('#app')
