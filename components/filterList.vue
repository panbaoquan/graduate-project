<template>
	<scroll-view scroll-x="true" show-scrollbar="false">
		<view class="filterList">
			<view class="filterList_item" v-for="(item,index) in data.sub_categories" :key="index" @tap="selectItem(index,item.id)">
				<view class="filterList_item_content" :class="{activeContent:item.id===activeId}">
					<!-- #ifdef APP-PLUS -->
					<image :src="item.src" mode=""></image>
					<!-- #endif -->
				</view>
				<view class="filterList_item_title">
					<span :class="{activeTitle:index===activeId}">
						<span v-if="index==0">
							全部
						</span>
						<span v-else>
                           {{item.name}}
						</span>
					</span>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import Icon from './icon/index.vue'
	export default {
		props: {
			list: {
				default: [{
						id: 1,
						name: '全部',
						src: '../../../static/images/drink.png'
					},
					{
						id: 2,
						name: '面包蛋糕',
						src: '../../../static/images/drink.png'
					},
					{
						id: 3,
						name: '奶茶果汁',
						src: '../../../static/images/drink.png'
					},
					{
						id: 4,
						name: '可口甜品',
						src: '../../../static/images/drink.png'
					},
					{
						id: 5,
						name: '醒脑咖啡',
						src: '../../../static/images/drink.png'
					},
					{
						id: 6,
						name: '冰淇淋',
						src: '../../../static/images/drink.png'
					},
					{
						id: 7,
						name: '其它',
						src: '../../../static/images/drink.png'
					},
					{
						id: 8,
						name: '其它',
						src: '../../../static/images/drink.png'
					},
					{
						id: 9,
						name: '其它',
						src: '../../../static/images/drink.png'
					},
				],
			},
			data:''
		},
		data() {
			return {
				activeId: 0
			};
		},
		methods: {
			selectItem(index,id) {
				this.activeId = index
				if(index==0){
				uni.request({
			    url: 'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_id='+id, 
			    success: (res) => {
				  this.$emit('filterData',res.data)
			    }
		        });	
				}else {
                  uni.request({
			    url: 'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]='+id, 
			    success: (res) => {
				  this.$emit('filterData',res.data)
			    }
		        });
				}
				
			}
		},
		components: {
			Icon
		},
		watch:{
			data(val){
				this.data = val
				console.log(this.data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.filterList {
		display: flex;

		&_item {
			margin-left: 12px;
			display: flex;
			width: 75px;
			flex-wrap: wrap;
			justify-content: center;

			&_content {
				width: 50px;
				height: 50px;
				background-color: #FFFFFF;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				&>image {
					width: 35px;
					height: 35px;
				}
			}

			&_title {
				width: 70px;
				height: 25%;
				text-align: center;
				letter-spacing: 1px;
				font-size: 26rpx;
			}
		}
	}

	.activeTitle {
		background-color: rgb(234, 61, 81);
		color: #FFFFFF;
		font-weight: 450;
		border-radius: 8px;
		padding: 0 5px;
	}

	.activeContent {
		background-image: linear-gradient(rgba(234, 61, 81, .45),
			rgba(234, 61, 81, .15),
			rgba(234, 61, 81, 0)
			);
	}
</style>
