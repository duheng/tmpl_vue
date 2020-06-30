import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router  from '../router/index'
import store from '../store/index'

new Vue({
	el: '#app',
	router,
	store,
	template: '<App />',
	components: { App }
})
