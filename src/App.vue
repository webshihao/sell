<template>
	<div>
		<v-header :seller="seller"></v-header>
		<div class="tab border-1px">
			<div class="tab-item">
				<a v-link="{ path: '/goods' }">商品</a>
			</div>
			<div class="tab-item">
				<a v-link="{ path: '/ratings' }">评论</a>
			</div>
			<div class="tab-item">
				<a v-link="{ path: '/seller' }">商家</a>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import header from "components/header/header.vue";
	const ERR_OK = 0;
	export default {
		data() {
			return {
				seller: {}
			}
		},
		created() {
			this.$http.get('/api/seller').then((response) => {
				response = response.body;
				if(response.errno === ERR_OK){
					this.seller = response.data;
					console.log(this.seller)
				}
			})
		},
		components: {
			// tag: constructor
			'v-header': header
		} 
	} 
</script>

<style lang="scss">
	@import './common/css/mixin.scss' ;
	.tab {
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		@include border-1px(rgba(7,17,27,0.1)); 
		// border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.tab .tab-item {
		flex: 1;
		text-align: center;
	}
	.tab .tab-item a {
		display: block;
		font-size: 14px;
		color: rgb(77,85,93);
	}
	.tab .tab-item a.v-link-active {
		color: rgb(240,20,20);
	}
</style>
