<template>
	<scroll-view class="dessertDrink">
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
		
		<filterList/>
		<view class="content">
			
		</view>
	</scroll-view>
</template>

<script>
	import filterList from '../../../components/filterList.vue'
	import Icon from '../../../components/icon/index.vue'
	export default {
		data() {
			return {
				
			};
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
			Icon
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
