import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

import './common/css/mixin.scss'

Vue.use(VueRouter)

let app = Vue.extend(App);
let router = new VueRouter();
router.map({
	'/goods': {
		component: goods
	},
	'/ratings': {
		component: ratings
	},
	'/seller': {
		component: seller
	}
});
router.start(app,'#app');