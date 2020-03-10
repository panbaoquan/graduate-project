<template>
	<view class="modStyle">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		 @scroll="scroll" show-scrollbar="false">
			<view class="top">
				<view class="status_bar">
					<!-- 这里是状态栏 -->
				</view>
				<!-- 	<view class="header">
					<view class="header_location">
						<text class="iconfont icon_location"></text>
					</view>
					<view class="header_messageCenter">
						<text class="iconfont icon_tongzhi"></text>
					</view>
				</view> -->
				<!-- 给body做一个两角半圆的头 -->
				<!-- 	<view class="content_header"></view> -->
			</view>
			<view class="content">
				<!-- 搜索框-->
				<view @tap="searchPage">
					<uni-search-bar :radius="100" class="search" placeholder="请输入商家或商品名称" cancelButton="none"></uni-search-bar>
				</view>
				<!-- 轮播图-->
				
					<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000" circular="true">
						<swiper-item v-for="(item ,index) in info" :key="index">
							<view class="swiper-item" :style="{backgroundColor:item.bgcolor}">
								{{item.content}}
							</view>
						</swiper-item>
					</swiper>
				
				<!--分类-->
				<view class="classify">
					<view class="classify-item"  v-for="(item,index) in menus" :key="index">
						<image :src="item.iconPath" mode=""></image>
						<text class="classify-item-title">{{item.name}}</text>
					</view>	
				</view>
				<!---->
				<!--附近商家-->
				<view class="nearStone">
					<text class="nearStone-title">
						附近商家
					</text>
					<view class="nearStone-select">
						<!--综合排序-->
						<view class="nearStone-select-group">
								<text class="nearStone-select-group" @tap="selectSort">{{rank}}
								<text class="iconfont icon_arrowDown" v-show="flagSort"></text>
								<text class="iconfont icon_arrowTop" v-show="!flagSort"></text>
								</text>   								
						</view>
						<!--品类-->
						<view class="nearStone-select-group">品类
						<text class="iconfont icon_arrowDown"></text>
						</view>
						<!--速度-->
						<view class="nearStone-select-group">速度<text class="iconfont icon_arrowDown"></text></view>
						<!--全部筛选-->
						<view class="nearStone-select-group">全部筛选<text class="iconfont icon_arrowDown"></text></view>
					</view>
					<!--综合排序-下拉模块-->
					<view class="group-select" v-show="selectContent">
						<view class="group-select-item" @tap="changeRankContent(index)" v-for="(item,index) in rankContent">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	import {
		uniSearchBar,
		uniSwiperDot
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				rankContent:[{
					id:0,
					name:"综合排序"
				},{
					id:1,
					name:"销量优先"
				},{
					id:2,
					name:"距离优先"
				},{
					id:3,
					name:"评分优先"
				}],
				rank:"综合排序",
				selectContent:false,
				flagSort:true,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				scrollHeight: 0,
				info: [{
					content: '',
					bgcolor:'red'
				}, {
					content: '',
					bgcolor:'green'
				}, {
					content: '',
					bgcolor:'blue'
				}],
				menus:[
					{
						name:'甜点饮品',
						iconPath:'../../static/images/sweet-drinks.png'
					},
					{
						name:'超市便利',
						iconPath:'../../static/images/supermarket.png'
					},
					{
						name:'蔬菜水果',
						iconPath:'../../static/images/fresh.png'
					},
					{
						name:'汉堡披萨',
						iconPath:'../../static/images/hamburger.png'
					},
					{
						name:'面包蛋糕',
						iconPath:'../../static/images/cake.png'
					},
					{
						name:'快食简餐',
						iconPath:'../../static/images/fast-food.png'
					},
					{
						name:'家常菜',
						iconPath:'../../static/images/home-cooking.png'
					},
					{
						name:'小吃馆',
						iconPath:'../../static/images/restaurant.png'
					},
					{
						name:'浪漫鲜花',
						iconPath:'../../static/images/flower.png'
					},
					{
						name:'全部',
						iconPath:'../../static/images/all.png'
					}
					
				]
			}
		},
		//页面生命周期函数
		onLoad() {

		},
		onShow() {

		},
		//ios真机运行，失效
		onReady() {
			// 	let that = this
			// 	uni.getSystemInfo({
			// 	    success: function (res) {    
			// 		    that._data.scrollHeight = res.windowHeight
			// 			let top = uni.createSelectorQuery().select('.top')
			// 			top.boundingClientRect(data=>{
			// 				let pH = data.height			
			// 				that._data.scrollHeight = that._data.scrollHeight - pH			
			// 			}).exec()

			// 	    },

			// 	});

		},
		methods: {
			changeRankContent(index){
				for(let i=0;i<this.rankContent.length;i++){
					if(this.rankContent[i].id===index){
						//更换排名内容
						this.rank = this.rankContent[i].name
						//排名面板消失
						this.selectContent = false
						//改变箭头方向,向下
						this.flagSort = true
					}
				}
			},
			scroll: function(e) {
				console.log(e)
				// this.old.scrollTop = e.detail.scrollTop
			},
			searchPage() {
				uni.navigateTo({
					url: './search/search'
				})
			},
			selectSort() {
				//箭头的开关
				this.flagSort = !this.flagSort
				//下拉面板，通过上下箭头判断面板是否出来
				if(this.flagSort){					 
					this.selectContent = false
				}else {
					this.selectContent = true
					
				}
				
			}
		},
		components: {
			uniSearchBar,
			uniSwiperDot
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
	.nearStone {
		width: 100%;
		&-select {
			font-size: 11.34rpx;
			display: flex;
			&-group {
				flex: 1;
			}
		}
	}
	.group-select {
		font-size: 30rpx!important;
		color: #808080;
		&-item {
			background-color: #F8F8F8;
			padding: 7.09rpx 0 7.09rpx 0;
			border-bottom: 1px solid #ccc;
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
		box-shadow:0 2px 4px rgba($color: #000000, $alpha: .12);
		background-color: #FFFFFF;
		&-item {
			flex: 1;
			text-align: center;
			font-size: 5px !important;
			&-title {
				font-size: 26rpx;
				margin-top: 15px;
				
			}
		}
		image {
			
			width: 120rpx;
			height: 120rpx;
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

	.icon {
		&_arrowDown{
			font-size: 8.51rpx;
		}

		&_arrowTop {
			font-size: 8.51rpx;
		}
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		width: 95%;
		margin: 0 auto;
		
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

	.scroll-Y {}



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

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-image: linear-gradient(-135deg, #FFBD27 0%, #FFD161 100%);
	}
</style>
