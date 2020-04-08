<template>
	<scroll-view class="dessertDrink">
		<!--标题栏-->
		<view class="title">
			 <view class="title-backIcon" @tap="goback">
			 	 <Icon icon="icon-fanhui" color='#FFF' size="20"
				  style="margin-left:10px;"></Icon>
			 </view> 
			 <view class="title-content">
				  甜点饮品
			 </view>
			 <view class="title-right">
			 	<!--占位-->
			 </view>
		</view>
	    <!--搜索栏-->
		<search-bar></search-bar>
		<!--过滤列表-->
		<filterList/>
		<view class="content">
		<!--过滤菜单-->
		<filter-menus></filter-menus>
		<!--商店列表-->
		<Store page='detail' 
		v-for="(item,index) in shops" 
		:index="item.id"
		:shop="item"
		/>
		</view>
	</scroll-view>
</template>
<script>
	import filterList from '../../../components/filterList.vue'
	import Icon from '../../../components/icon/index.vue'
	import filterMenus from '../../../components/filterMenus.vue'
	import searchBar from '../../../components/searchBar.vue'
	import Store from '../../../components/store.vue'
	export default {
		data() {
			return {
			shops:[
				{
				    id:1,
				    name:'一點點',
				    logoSrc:"../../../static/images/yidiandian.jpg"
		     	},
				{
					id:2,
					name:'奈雪の茶',
					logoSrc:"../../../static/images/yidiandian.jpg"
				},
				{
					id:3,
					name:'贡茶',
					logoSrc:"../../../static/images/yidiandian.jpg"
				},
				{
					id:4,
					name:'辛巴克',
					logoSrc:"../../../static/images/yidiandian.jpg"
				},
				{
					id:5,
					name:'甜啦啦',
					logoSrc:"../../../static/images/yidiandian.jpg"
				}
			]	
			};
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods:{
			goback(){
				uni.navigateBack({
					    delta: 1,
					    animationType: 'pop-out',
					    animationDuration: 200
				})
				
			}
		},
		components:{
			filterList,
			Icon,
			filterMenus,
			searchBar,
			Store
		}
	}
</script>

<style lang="scss">
page {
	  background-color: #f7f7f7;
}
.status_bar {
	background-image: none;
	background-color: rgb(235,89,120);
}

.title {
	display: flex;
	background-color: rgb(235,89,120);
	padding-top: 50px;
	&-backIcon {
		flex: 1;
		display: flex;
		align-items: center;
		
	}
	&-content {
		flex: 1;
		text-align: center;
		font-size: 21px;
		color: #FFFFFF;
	}
	&-right {
		flex: 1;
	}
}
.content{
margin: 0 10px;
}
</style>
