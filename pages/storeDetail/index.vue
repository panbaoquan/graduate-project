<template>
	<view class="storeDetail">
		<!--顶部-->
		<Header/>
		<!--背景图片-->
		<view class="topBg">
			<view class="">
				
			</view>
		</view>
		<!--body-->
		<view class="bottomBody">
			<!--切换栏-->
			<nav-bar @func="getNavIndex"></nav-bar>
		    <!--垂直导航 购物车组件也在这里-->
			<vertical-nav v-show="navIndex==0?true:false"></vertical-nav>	
		</view>
		<!--商店信息-->
		<shop-info></shop-info>

	</view>
</template>

<script>
	import shopInfo from './components/shopInfo'
	import navBar from './components/navBar.vue'
	import verticalNav from './components/verticalnav.vue'
	import Header from './components/header.vue'
	export default {
		data() {
			return {
			    data:'',
				navIndex:0
				
			};
		},
		onLoad(option) {
			// console.log(option.id)
			// this.data = option.id
			
		},
		methods:{
			getNavIndex(data){
				this.navIndex = data
				console.log(this.navIndex)
			}
		},
		components:{
			shopInfo,
			navBar,
			verticalNav,
			Header
		}
		
		
	}
</script>

<style lang="scss">
.storeDetail{
	
}
//
.topBg{
	width: 100%;
	height: 160px;
	outline:  1px solid skyblue;
	background-image: url('@/static/images/shops/redWelcome.png');
	background-size:100% 100%;
	background-repeat: no-repeat;
	&>view {
		width: 100%;
		height: 100%;
		
	}
}
//
.bottomBody{
	width: 100%;
}



</style>
