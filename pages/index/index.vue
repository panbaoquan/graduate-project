<template>
	<view class="modStyle">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll" show-scrollbar="false">
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
				<view class="bar" @tap="searchPage">
					<image src="../../static/images/search.png" alt="">
						<input type="text" value="" placeholder="请输入要搜索的内容" />
				</view>
				<!-- 轮播图-->
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000" circular="true">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="swiper-item" :style="{backgroundColor:item.bgcolor}">
							{{item.content}}
						</view>
					</swiper-item>
				</swiper>
				<!-- 分类 -->
				<view class="block">
					<view class="block-section" v-for="(item,index) in menus" :key="index">
						<image :src="item.iconPath" mode=""></image>
						<view>
							<text class="classify-item-title">{{item.name}}</text>
						</view>
					</view>
				</view>
				<!--附近商家-->
				<view class="nearStone">
					<view class="nearStone-title">
						附近商家
					</view>
					<!--筛选模块（封装）-->
					<view class="nearStone-select">
						<view class="nearStone-select-group" v-for="(item,index) in flags" :key="index" @tap="selectFlag(item.flagValue,item.flagName)">
							{{item.name}}
							<text class="iconfont icon_arrowDown" v-show="item.flagValue"></text>
							<text class="iconfont icon_arrowTop" v-show="!item.flagValue"></text>
						</view>
					</view>
					<!--综合排序-下拉模块-->
					<view class="group-select-sort" v-show="flags[0].flag_dropdown_list">
						<view class="group-select-sort-item" @tap="changeRankContent(index)" v-for="(item,index) in flags[0].rankContent" :key="index">
							{{item.name}}
						</view>
					</view>
					<!--品类-下拉模块-->
					<view class="group-select-kind" v-show="flags[1].flag_dropdown_list">
						尽情期待
						<view class="group-select-kind-leftList">

						</view>

						<view class="group-select-kind-rightContent">

						</view>
					</view>
					<!--速度-下拉面板-->
					<view class="group-select-speed" v-show="flags[2].flag_dropdown_list">
						<view class="group-select-speed-onSpeed">
							<view class="group-select-speed-onSpeed-item" @tap="changeBackgroundColor(index,1)" v-for="(item,index) in flags[2].time"
							 :key="index" :style="{backgroundColor:item.bgColor}">
								{{item.content}}
							</view>
						</view>

						<view class="group-select-speed-underDistance">
						

							<view class="group-select-speed-underDistance-item" @tap="changeBackgroundColor(index,2)" v-for="(item,index) in flags[2].distance"
							 :key="index" :style="{backgroundColor:item.bgColor}">
								{{item.content}}
							</view>
						</view>
						<view class="group-select-btn">
							<view class="group-select-btn-resetBtn" @tap="reset">
								重置
							</view>
							<view class="group-select-btn-finishBtn" @tap="finish">
								完成<text v-show="count?true:false">
									（已选{{count}})
								</text>
							</view>
						</view>
					</view>
					<!--全部筛选-下拉面板-->
					<view v-show="flags[3].flag_dropdown_list">
						尽请期待
					</view>
				</view>
			   <!--店铺-->
				<scroll-view class="stores">
					<!--store组件-->
					<store v-for="item in 5"></store>
                  
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
	
	export default {
		data() {
			return {
				count: 0,
				bgcolor: '#FFFFFF',
				flagBg: true,
				flags: [{
						name: '综合排序',
						flagValue: true,
						flagName: 'flagSort',
						flag_dropdown_list: false,
						rankContent: [{
							id: 0,
							name: "综合排序"
						}, {
							id: 1,
							name: "销量优先"
						}, {
							id: 2,
							name: "距离优先"
						}, {
							id: 3,
							name: "评分优先"
						}],
					},
					{
						name: '品类',
						flagValue: true,
						flagName: 'flagKind',
						flag_dropdown_list: false,
					},
					{
						name: '速度',
						flagValue: true,
						flagName: 'flagSpeed',
						flag_dropdown_list: false,
						time: [{
								content: '30分钟内',
								bgColor: '#FFFFFF',
								flagBg: true

							},
							{
								content: '40分钟内',
								bgColor: '#FFFFFF',
								flagBg: true
							},
							{
								content: '50分钟内',
								bgColor: '#FFFFFF',
								flagBg: true
							},
							{
								content: '60分钟内',
								bgColor: '#FFFFFF',
								flagBg: true
							}
						],
						distance: [{
								content: '1km以内',
								bgColor: '#FFFFFF',
								flagBg: true

							},
							{
								content: '2km以内',
								bgColor: '#FFFFFF',
								flagBg: true
							},
							{
								content: '3km以内',
								bgColor: '#FFFFFF',
								flagBg: true
							},
							{
								content: '5km以内',
								bgColor: '#FFFFFF',
								flagBg: true
							}
						]
					},
					{
						name: '全部筛选',
						flagValue: true,
						flagName: 'flagFilter',
						flag_dropdown_list: false,
					}
				],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				scrollHeight: 0,
				info: [{
					content: '',
					bgcolor: 'red'
				}, {
					content: '',
					bgcolor: 'green'
				}, {
					content: '',
					bgcolor: 'blue'
				}],
				menus: [{
						name: '甜点饮品',
						iconPath: '../../static/images/sweet-drinks.png'
					},
					{
						name: '超市便利',
						iconPath: '../../static/images/supermarket.png'
					},
					{
						name: '蔬菜水果',
						iconPath: '../../static/images/fresh.png'
					},
					{
						name: '汉堡披萨',
						iconPath: '../../static/images/hamburger.png'
					},
					{
						name: '面包蛋糕',
						iconPath: '../../static/images/cake.png'
					},
					{
						name: '快食简餐',
						iconPath: '../../static/images/fast-food.png'
					},
					{
						name: '家常菜',
						iconPath: '../../static/images/home-cooking.png'
					},
					{
						name: '小吃馆',
						iconPath: '../../static/images/restaurant.png'
					},
					{
						name: '浪漫鲜花',
						iconPath: '../../static/images/flower.png'
					},
					{
						name: '全部',
						iconPath: '../../static/images/all.png'
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
			//重置 
			reset(){
				this.count = 0
				for(let i=0;i<this.flags[2].time.length;i++){
					this.flags[2].time[i].flagBg='true'
					this.flags[2].time[i].bgColor ='#FFFFFF'
				}
				for(let i=0;i<this.flags[2].distance.length;i++){
					this.flags[2].distance[i].flagBg='true'
					this.flags[2].distance[i].bgColor ='#FFFFFF'
				}
			},
			finish(){
				//箭头向下
				this.flags[2].flagValue = true
				//关闭下拉面板
				this.flags[2].flag_dropdown_list = false
			},
			//改变背景颜色
			changeBackgroundColor(index,group) {
				if(group==1){
					this.flags[2].time[index].flagBg = !this.flags[2].time[index].flagBg
					if (this.flags[2].time[index].flagBg) {
						this.flags[2].time[index].bgColor = '#FFFFFF'
						this.count--
					} else {
						this.flags[2].time[index].bgColor = '#FFBD27'
						this.count++
					}
				}else if(group==2){
					this.flags[2].distance[index].flagBg = !this.flags[2].distance[index].flagBg
					if (this.flags[2].distance[index].flagBg) {
						this.flags[2].distance[index].bgColor = '#FFFFFF'
						this.count--
					} else {
						this.flags[2].distance[index].bgColor = '#FFBD27'
						this.count++
					}
				}
				
			},
			//改变综合排序出的值
			changeRankContent(index) {
				for (let i = 0; i < this.flags[0].rankContent.length; i++) {
					if (this.flags[0].rankContent[i].id === index) {
						//更换排名内容
						this.flags[0].name = this.flags[0].rankContent[i].name
						//排名面板消失
						this.flags[0].flag_dropdown_list = false
						//改变箭头方向,向下
						this.flags[0].flagValue = true
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
			//封装筛选模块  
			selectFlag(flagValue, flagName) {
				//箭头的开关值
				flagValue = !flagValue

				this.flags.forEach(item => {
					//每次初始化进来

					//让4个下拉面板都消失
					item.flag_dropdown_list = false
					//除当前点击的面板，其它面板的箭头向下，即它的flag要为true
					item.flagValue = true

					if (item.flagName === flagName) {
						//上下箭头改变的开关
						item.flagValue = flagValue
						//下拉面板的显示开关
						item.flag_dropdown_list = !flagValue
					}
				})

			},

		},
		watch: {
			// count: function(val, oldVal) {
			// 	console.log('new: %s, old: %s', val, oldVal)
			// }
		},
		components: {
			uniSearchBar,
			uniSwiperDot,
			store
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
	 }
	.nearStone {
		width: 100%;
		&-title {
			padding: 20px 0;
		}

		&-select {
			font-size: 25rpx;
			display: flex;

			&-group {
				flex: 1;
			}
		}
	}

	.group-select {
		&-sort {
			font-size: 30rpx !important;
			color: #808080;

			&-item {
				
				padding: 7.09rpx 0 7.09rpx 0;
				border-bottom: .5px solid #ccc;
			}
		}

		&-speed {
			font-size: 25rpx;
            &-onSpeed {
				padding-top:15px!important;
			}
			&-onSpeed,
			&-underDistance {
				display: flex;
				justify-content: space-evenly;
				padding-top: 5px;

				&-item {
					width: 20%;
					text-align: center;
					padding: 5px 0;
					border-radius: 4px;
					background-color: #FFFFFF;
				}
			}

		}

		&-btn {
			display: flex;
			text-align: center;
			height: 40px;
			line-height: 40px;
			padding-top: 15px;
			font-size: 26rpx;
			letter-spacing: 2px;

			&-resetBtn {
				flex: 1;
				border-top: .5px solid #ccc;
			}

			&-finishBtn {
				flex: 1;
				border-top: .5px solid #ccc;
				border-left: .5px solid #ccc;
				background-color: #F0AD4E;
			}

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

			&-title {
				font-size: 26rpx;
				margin-top: 15px;

			}
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

	.icon {
		&_arrowDown {
			font-size: 15rpx;
		}

		&_arrowTop {
			font-size: 15rpx;
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
