<template>
	<view>
		<view class="stores-item" >
			<view class="stores-item-leftLogo">
				<view class="stores-item-leftLogo-top">
				<image src="../../static/images/storesLogo/KFC-logo.jpg" mode="aspectFill"></image>
				</view>
				<view class="stores-item-leftLogo-bottom">
					<!--占位-->
				</view>
			</view>	
			<view class="stores-item-rightContent">
				<view class="stores-item-rightContent-top">
				<view class="store-title">
					肯德鸡宅急送
				</view>
				<view class="store-firstLine">
					<view class="store-firstLine-evaluate">
						<image  class="store-firstLine-evaluate-rate" src="../../static/images/icon-rate.png" mode="aspectFill"></image><text>4.2</text>
					</view>
					<view class="store-firstLine-arrivalTime">
						<text>30分钟</text>
						<text>1.5km</text>
					</view>
				</view>
				<view class="store-secondLine">
					起送<text>￥0</text>配送<text>￥0</text>人均<text>￥0</text>
				</view>
				</view>
				<view class="stores-item-rightContent-bottom">
					更多活动尽请期待
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
</script>

<style lang="scss">
	//store布局
	.stores-item {
			display: flex;
			padding: 10px;
	        border-radius: 8px; 
			justify-content: space-between;
			background-color: #FFFFFF;
			margin-bottom: 5px;
			&-leftLogo {
				width: 20%;
				&-top {
					height: 50px;
					background-color: #333333;
					& >image {
						width: 100%;
						height: 100%;
					}
				}
				&-bottom {
					height: 30px;
				}
			}
			&-rightContent {
				width: 77%;
				
				&-top {
					height: 50px;
					
				}
				&-bottom {
					font-size: 12px;
					height: 30px;
					padding-top: 5px;
				}
			}
	}
	//
	.store {
			 &-title {
				 //标题
				 font-size: 32rpx;
				 letter-spacing: 1px;
				 font-weight: 600;
			 }
			 &-firstLine {
				 height: 18px;
				 // background-color: #007AFF; 
				 font-size: 12px;
				 display: flex;
				 &-evaluate {
					 flex: 1;
				     display: flex;
					 align-items: center;
					 &-rate {
						 width: 16px;
						 height: 16px;	 
					 }
					 &>text {
						 padding-left: 2px;
					 }
				 }
				 &-arrivalTime {
					 flex: 1;
					 text-align: right;
					 
					 &>text:nth-child(2) {
					    padding-left: 5px;
						
					 }
				 }
			 }
			 &-secondLine {
				 font-size: 12px;
				 &>text {
					 
					 padding-right: 6px;
				 }
			 }
	}
</style>
