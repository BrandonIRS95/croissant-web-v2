// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueRouter from 'vue-router'
import Auth from './packages/auth/Auth.js'
import {routes} from './routes'

Vue.use(VueRouter)
Vue.use(Auth)

const router = new VueRouter({
	linkActiveClass: 'active',
	routes
})

Vue.prototype.$http = Axios

router.beforeEach(
	(to, from, next) => {
		if (to.matched.some(record => record.meta.forVisitors)) {
			if (Vue.auth.isAuthenticated()) {
				next({
					path: '/home'
				})
			} else next()
		} 
		else if (to.matched.some(record => record.meta.forAuth)) {
			if (!Vue.auth.isAuthenticated()) {
				next({
					path: '/login'
				})
			} else next()
		}

		else next()
	}
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
