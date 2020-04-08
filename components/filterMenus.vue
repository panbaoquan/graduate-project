<template>
	<view>
		<view class="filterMenus">
			<!--筛选模块（封装）-->
			<view class="filterMenus-select">
				<view class="filterMenus-select-group" 
				v-for="(item,index) in flags" 
				:key="index" 
				@tap="selectFlag(item.flagValue,item.flagName)">
					<span :class="{activeItem:activeId===item.id}">{{item.name}}</span>
					<text class="iconfont icon-arrowDown" v-show="item.flagValue"></text>
					<text class="iconfont icon-arrowTop" v-show="!item.flagValue"></text>
				</view>
			</view>
			<!--下拉面板-->
			<view class="filterMenus_model" v-show="flagModel">
				<!--1-->
				<view  class="filterMenus_model_sort" v-show="flags[0].flag_dropdown_list">
					<view class="filterMenus_model_sort_item" 
					v-for="item in modelContent.content" 
					:key="item.id" 
					@tap="selectValue(item.id,modelContent.id)"
					>
					  {{item.name}}
					</view>
				</view>
				<!--2-->
				<view class="filterMenus_model_speed" v-show="flags[1].flag_dropdown_list">
						<view class="filterMenus_model_speed_item"
						  v-for="item in modelContent.content"
						  :key="item.id" 
						  :class="[item.isSelected?'speed_selected':'speed_unselected']"
						  @click="changeCount(item.id)"
						 >
							{{item.content}}
						</view>
						<view class="filterMenus_model_speed_btn">
							<view class="filterMenus_model_speed_btn_resetBtn" @tap="reset">
								重置
							</view>
							<view class="filterMenus_model_speed_btn_finishBtn" @tap="finish">
								完成<text v-show="count?true:false">
									（已选{{count}})
								</text>
							</view>
						</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				count: 0,
				flagModel: false,
				modelContent:[],
				activeId:1,
				flags: [{
					    id:1,
						name: '综合排序',
						flagValue: true,
						flagName: 'flagSort',
						flag_dropdown_list: false,
						content: [
						{
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
						id:2,
						name: '速度',
						flagValue: true,
						flagName: 'flagSpeed',
						flag_dropdown_list: false,
						content: [
							{
							    id:1,
								content: '30分钟内',
								isSelected:false
							},
							{
								id:2,
								content: '40分钟内',
								isSelected:false
							},
							{
								id:3,
								content: '50分钟内',
								isSelected:false
							},
							{
								id:4,
								content: '60分钟内',
								isSelected:false
							}, {
								id:5,
								content: '1km以内',
								isSelected:false

							},
							{
								id:6,
								content: '2km以内',
								isSelected:false
							},
							{
								content: '3km以内',
								isSelected:false
							},
							{
								id:7,
								content: '5km以内',
								isSelected:false
							}
						]
					},
				],
			};
		},
		methods: {
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
					//箭头向下,flagValue为true
					item.flagValue = true
					if (item.flagName === flagName) {
						//上下箭头改变的开关
						item.flagValue = flagValue
						//下拉面板的显示开关
						item.flag_dropdown_list = !flagValue
						//
						this.flagModel = !flagValue
                        this.modelContent = item
					}
				})

			},
			//调换,全部筛选选中值
			selectValue(itemId,nameId) {
				//遍历flags
				this.flags.forEach(item=>{
					if(item.id===nameId) {
						item.content.forEach(itemContent=>{
							if(itemContent.id===itemId)
							//换值
							item.name = itemContent.name
							//关闭面板
							item.flag_dropdown_list=false,
							//箭头向下,即flagValue为true
							item.flagValue = true
						})
					}
				})
				//
			},
			//重置
			reset(){
				this.modelContent.content.forEach(item=>{
					item.isSelected = false
					this.count=0
				})
			},
			finish(){
				this.modelContent.flagValue=true
				this.modelContent.flag_dropdown_list = false
			},
			//总计
			changeCount(id){
				this.modelContent.content.forEach(item=>{
					if(item.id===id){
						item.isSelected = !item.isSelected
						if(item.isSelected){
							this.count++
						}else {
							this.count--
						}
					}
				})
			}
			
			
		},
		

	}
</script>

<style lang="scss">
	.filterMenus {
		width: 100%;
        margin: 10px auto;
		&_title {
			padding: 20px 0 20px 13px;

			&_offset {
				padding-left: 18px;
			}
		}

		&-select {
			font-size: 25rpx;
			display: flex;
			justify-content: flex-start;
			&-group {
				width: 35%
			}
		}

		&_model {
			width: 100%;
			&_sort {
				font-size: 30rpx !important;
				color: #808080;
				&_item {
					padding: 7.09rpx 0 7.09rpx 0;
					border-bottom: .5px solid #ccc;
				}
			}
			&_speed {
				width: 100%;
				font-size: 25rpx;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				
				&_item {
					width: 72px;
					height: 26px;
					margin: 5px auto;
					text-align: center;
					line-height: 26px;
					border-radius: 4px;
					background-color: #F1F1F1;
				}
				&_btn {
					width: 100%;
					display: flex;
					text-align: center;
					height: 40px;
					line-height: 40px;
					padding-top: 15px;
					font-size: 26rpx;
					letter-spacing: 2px;
					
					&_resetBtn {
						flex: 1;
						border-top: .5px solid #ccc;
					}
					
					&_finishBtn {
						flex: 1;
						border-top: .5px solid #ccc;
						border-left: .5px solid #ccc;
						background-color: #F0AD4E;
					}
					
				}
			}
		}
	}

	//箭头
	.icon {
		&-arrowDown {
			font-size: 15rpx;
			color: #C8C7CC;
			margin-left: 4px;
		}

		&-arrowTop {
			font-size: 15rpx;
			color: #C8C7CC;
			margin-left: 4px;
		}
	}
	//过滤菜单激活
	.activeItem {
		color: rgb(238, 63, 77);
		
	}
	//速度下拉列表选项激活
	.speed {
		&_selected {
			background-color: #FFBD27;
		}
		&_unselected {
		background-color: #F1F1F1;
		}
	}

</style>
