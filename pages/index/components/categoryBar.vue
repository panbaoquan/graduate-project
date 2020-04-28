<template>
	<view class="block">
		<view class="block-section" v-for="(item,index) in menus" :key="index" @tap="switchPage(index)">
			<image :src="'https://fuss10.elemecdn.com'+item.image_url" mode=""></image>
			<view>
				<text class="classify-item-title">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menus: [{
						name: '甜点饮品',
						iconPath: '../../static/images/sweet-drinks.png',
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
		mounted(){
			this.getCategory()
		},
		methods:{
			//分类，切换分页
			switchPage(index) {
				switch (index + 1) {
					case 1:
						uni.navigateTo({
							url: './dessertDrink/dessertDrink'
						})
					default:
						break;
				}
			},
			//分类列表
			getCategory(){
				uni.request({
					url: this.$store.state.baseUrl+'/v2/index_entry', //仅为示例，并非真实接口地址。
					success: (res) => {
						this.menus = res.data
						// console.log(res.data);
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.block {
	    width           : 100%;
	    display         : flex;
	    flex-wrap       : wrap;
	    background-color: #fff;
	    margin-top      : 10px;
	    border-radius   : 10px;
	
	    &-section {
	        width      : 20%;
	        height     : 90px;
	        padding-top: 15px;
	        text-align : center;
	
	        &>image {
	            width : 50px;
	            height: 50px;
	        }
	    }
	}
	.classify-item-title {
		font-size: 26rpx;
		margin-top: 15px;
	}

   
</style>
