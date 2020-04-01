<template>
	<view class="modStyle">
		<scroll-view scroll-top="200px" scroll-y="true" class="scroll-Y" @scroll="scroll" show-scrollbar="true">
			<!--顶部 topBar-->
			<top-bar></top-bar>
			<view class="content">
				<!-- 搜索框-->
				<search-bar :class="{searchBarbg:isDown}"></search-bar>
				<!-- 轮播图-->
				<my-swiper :class="{offsetTop:isDown}"></my-swiper>
				<!-- 分类 -->
				<category-bar></category-bar>     
				<!--推荐商家悬浮与固定-->
				<Recommend :isTop="isTop"/>
				<!--店铺-->
				<scroll-view class="stores" scroll-y="true" show-scrollbar="true">
					<view :class="{stores_seat:isTop}"></view>
					<!--单独商店-->
					<store v-for="(item,index) in 15" :index='index' :key="index"></store>
				</scroll-view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	import {
		uniSearchBar,
		uniSwiperDot
	} from '@dcloudio/uni-ui'
	import store from '../../components/store.vue'
	import topBar from "../../components/topbar/topBar.vue"
	import searchBar from './components/searchBar.vue'
	import mySwiper from './components/swiper.vue'
	import categoryBar from './components/categoryBar.vue'
	import Recommend from './components/recommend-shops/recommend.vue'
	export default {
		data() {
			return {
				isTop: false,
				isDown: false,
				testHeight: 0,
				count: 0,
				bgcolor: '#FFFFFF',
				flagBg: true,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				scrollHeight: 0,
			}
		},
		//页面生命周期函数
		onLoad(){},
		onShow() {},
		onReady() {},
		//监听页面滚动高度事件
		onPageScroll: function(e){ //nvue暂不支持滚动监听，可用bindingx代替
			this.testHeight = e.scrollTop
			//控制顶部搜索框位置是否固定
			if (e.scrollTop < 40 && e.scrollTop > 0) {
				this.isDown = false;
			} else if (e.scrollTop >= 40) {
				this.isDown = true;
			}
			//控制附近商家模块位置是否固定
			if (e.scrollTop >= 386) {
				this.isTop = true
			} else if (e.scrollTop < 386) {
				this.isTop = false
			}

		},
		methods: {

			scroll: function(e) {
				console.log(e)
				// this.old.scrollTop = e.detail.scrollTop

			},

		},
		watch: {
	
		},
		components: {
			uniSearchBar,
			uniSwiperDot,
			store,
			topBar,
			searchBar,
			mySwiper,
			categoryBar,
			Recommend
		}

	}
</script>
<style>
	.modStyle {
		background-color: #F5F2F0;

	}

	.modStyle .uni-searchbar__box {
		justify-content: flex-start !important;
		border-color: #807f7f;
	}

	.modStyle .uni-searchbar {
		background-color: #F5F2F0;

	}
</style>

<style lang="scss" scoped>
	@import "./index.scss";

	.stores {
		width: 100%;
		border-radius: 4px;
		margin-top: 10px;
		&_seat {
			width: 100%;
			height: 85px;
		}
	}
	.classify {
		width: 100%;
		height: 400rpx;
		margin-top: 34.72rpx;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		align-content: space-around;
		border-radius: 15px;
		box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .12);
		background-color: #FFFFFF;

		&-item {
			flex: 0 0 120rpx;
			text-align: center;
			font-size: 5px !important;
		}

		image {
			width: 50px;
			height: 50px;
		}
	}

	.swiper {
		width: 100%;
		border-radius: 15px;

		&-item {
			height: 100%;
			border-radius: 15px;
		}

	}

	.search {
		width: 702.08rpx;
		padding-top: 20px;
		margin-top: 6.94rpx;
	}


	.top {
		position: relative;
	}

	.header {
		display: flex;
		justify-content: space-between;
		height: 134.72rpx;
		background-image: linear-gradient(-135deg, #FFBD27 0%, #FFD161 100%);

		&_location {
			flex: 1;
			text-align: left;
			padding-left: 23.61rpx;
		}

		&_messageCenter {
			flex: 1;
			text-align: right;
			padding-right: 27.77rpx;
		}
	}

	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 95%;
		margin: 0px auto;

		&_header {
			width: 100%;
			height: 37.58rpx;
			border-top-left-radius: 52.08rpx;
			border-top-right-radius: 52.08rpx;
			position: absolute;
			bottom: 0;
			background-color: #FFFFFF;
			border: 1px solid #FFFFFF;
		}
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
