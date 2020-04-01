<template>
	<view>
		<view class="title">
			 <view class="title-backIcon" @tap="goback">
			 	<image src="../../../static/images/goback.png" mode=""></image>
			 </view> 
			 <view class="title-content">
				  甜点饮品
			 </view>
			 <view class="title-right">
			 	<!--占位-->
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goback(){
				console.log(1)
				uni.navigateBack({
					    delta: 1,
					    animationType: 'pop-out',
					    animationDuration: 200
				})
			}
		}
	}
</script>

<style lang="scss">
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
		&>image {
			width: 18px;
			height: 18px;
			margin-left: 12px;
		}
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
</style>
