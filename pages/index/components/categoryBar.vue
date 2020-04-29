<template>
	<view class="block">
		<view class="block-section" v-for="(item,index) in menus" :key="index" @tap="switchPage(item)">
			<image :src="item.iconPath" mode=""></image>
			<view>
				<text class="classify-item-title">{{item.name}}</text>
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
						id:239
					},
					{
						name: '超市便利',
						iconPath: '../../static/images/supermarket.png',
						id:252
					},
					{
						name: '蔬菜水果',
						iconPath: '../../static/images/fresh.png',
						id:244
					},
					{
						name: '汉堡披萨',
						iconPath: '../../static/images/hamburger.png',
						id:207
					},
					{
						name: '面包蛋糕',
						iconPath: '../../static/images/cake.png',
						id:248
					},
					{
						name: '快食简餐',
						iconPath: '../../static/images/fast-food.png',
						id:207,
					},
					{
						name: '家常菜',
						iconPath: '../../static/images/home-cooking.png',
						id:220
					},
					{
						name: '小吃馆',
						iconPath: '../../static/images/restaurant.png',
						id:233
					},
					{
						name: '浪漫鲜花',
						iconPath: '../../static/images/flower.png',
						id:248
					},
					{
						name: '全部',
						iconPath: '../../static/images/all.png'
					}
				
				]
			}
		},
		mounted(){
			//this.getCategory()
		},
		methods:{
			//排序
           sortBykey(ary, key) {
  return ary.sort(function (a, b) {
    let x = a[key]
    let y = b[key]
    return ((x < y) ? -1 : (x > y) ? 1 : 0)
  })
},
			//分类，切换分页
			switchPage(item) {
				    
					uni.navigateTo({
						url: './dessertDrink/dessertDrink?id='+item.id+'&name='+item.name
					})
			},
			//分类列表
			getCategory(){
				//第一版进入
				// uni.request({
				// 	url: this.$store.state.baseUrl+'/v2/index_entry', //仅为示例，并非真实接口地址。
				// 	success: (res) => {
				// 		this.menus = res.data
				// 		// console.log(res.data);
				// 	}
				// });
				//第二版进入
			    // uni.request({
				// 	url:this.$store.state.baseUrl+'/shopping/v2/restaurant/category',
				//     // url: "https://elm.cangdu.org/shopping/v2/restaurant/category",
				// 	success: (res) => {
				// 		this.menus = res.data
				// 		// console.log(res.data);
                //         this.sortBykey(this.menus,'id')
				// 	}
				// });
            },
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
