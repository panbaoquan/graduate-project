<template>
	<view class="nearStone" :class="{nearStoneoffsetTop:isTop}">
		<view :class="{nearStoneoffsetTop_Content:isTop}">
			<!--title-->
			<view class="nearStone_title" :class="{nearStone_title_offset:isTop}">
				推荐商家
			</view>
			<!--筛选模块（封装）-->
			<view class="nearStone-select">
				<view class="nearStone-select-group" v-for="(item,index) in flags" :key="index" @tap="selectFlag(item.flagValue,item.flagName)">
					{{item.name}}
					<text class="iconfont icon-arrowDown" v-show="item.flagValue"></text>
					<text class="iconfont icon-arrowTop" v-show="!item.flagValue"></text>
				</view>
			</view>
			<!--综合排序-下拉模块-->
			<view class="group-select-sort" v-show="flags[0].flag_dropdown_list">
				<view class="group-select-sort-item" @tap="changeRankContent(index)" v-for="(item,index) in flags[0].rankContent"
				 :key="index">
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
			<view class="group-select-all" v-show="flags[3].flag_dropdown_list">
				尽请期待
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			isTop:'',
			
		},
		data() {
			return {
				count:0,
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
								bgColor: '#F1F1F1',
								flagBg: true
				
							},
							{
								content: '40分钟内',
								bgColor: '#F1F1F1',
								flagBg: true
							},
							{
								content: '50分钟内',
								bgColor: '#F1F1F1',
								flagBg: true
							},
							{
								content: '60分钟内',
								bgColor: '#F1F1F1',
								flagBg: true
							}
						],
						distance: [{
								content: '1km以内',
								bgColor: '#F1F1F1',
								flagBg: true
				
							},
							{
								content: '2km以内',
								bgColor: '#F1F1F1',
								flagBg: true
							},
							{
								content: '3km以内',
								bgColor: '#F1F1F1',
								flagBg: true
							},
							{
								content: '5km以内',
								bgColor: '#F1F1F1',
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
			};
		},
		methods:{
			currentScroll() {
				uni.pageScrollTo({
					scrollTop: 386, //距离页面顶部的距离
					duration: 20
				});
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
					this.currentScroll()
					
					if (item.flagName === flagName) {
						//上下箭头改变的开关
						item.flagValue = flagValue
						//下拉面板的显示开关
						item.flag_dropdown_list = !flagValue
					}
				})
			
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
			//改变背景颜色
			changeBackgroundColor(index, group) {
				if (group == 1) {
					this.flags[2].time[index].flagBg = !this.flags[2].time[index].flagBg
					if (this.flags[2].time[index].flagBg) {
						this.flags[2].time[index].bgColor = '#F1F1F1'
						this.count--
					} else {
						this.flags[2].time[index].bgColor = '#FFBD27'
						this.count++
					}
				} else if (group == 2) {
					this.flags[2].distance[index].flagBg = !this.flags[2].distance[index].flagBg
					if (this.flags[2].distance[index].flagBg) {
						this.flags[2].distance[index].bgColor = '#F1F1F1'
						this.count--
					} else {
						this.flags[2].distance[index].bgColor = '#FFBD27'
						this.count++
					}
				}
			
			},
			//重置
			reset() {
				this.count = 0
				for (let i = 0; i < this.flags[2].time.length; i++) {
					this.flags[2].time[i].flagBg = 'true'
					this.flags[2].time[i].bgColor = '#F1F1F1'
				}
				for (let i = 0; i < this.flags[2].distance.length; i++) {
					this.flags[2].distance[i].flagBg = 'true'
					this.flags[2].distance[i].bgColor = '#F1F1F1'
				}
			},
			finish() {
				//箭头向下
				this.flags[2].flagValue = true
				//关闭下拉面板
				this.flags[2].flag_dropdown_list = false
			},
		},
		// watch:{
		// 	isTop:(old,new)=>{
		// 		this
		// 	}
		// }
	}
</script>

<style lang="scss">
	.nearStone {
		width: 100%;
		&_title {
			padding: 20px 0 20px 13px;
			&_offset {
				padding-left: 18px;
			}
		}

		&-select {
			font-size: 25rpx;
			display: flex;
            text-align: center;
			&-group {
				flex: 1;
			}
		}
	}
	//附近商家固定时候的样式
	.nearStoneoffsetTop {
		background-color: #FFFFFF;
		position: fixed;
		top:100px;
		z-index: 100;
		width: 100%;
		&_content {
			margin: 0 10px;
		}
		
	}
	//箭头
	.icon {
		&-arrowDown {
			font-size: 15rpx;
		}
	
		&-arrowTop {
			font-size: 15rpx;
		}
	}
	//下拉列表
	.group-select {
		&-sort {
			font-size: 30rpx !important;
			color: #808080;
			&-item {
				padding: 7.09rpx 0 7.09rpx 0;
				border-bottom: .5px solid #ccc;
				margin: 0 13px;
			}
		}
	
		&-speed {
			font-size: 25rpx;
			&-onSpeed {
				padding-top: 15px !important;
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
	    &-all {
			margin: 0 13px;
		}
		&-kind {
			margin: 0 13px;
		}
	}
</style>
