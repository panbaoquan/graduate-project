<template>
	<view>
		<navigator url="@pages/storeDetail/index">
		<view class="stores-item" @click="detail(shop.id)">
			<view class="stores-item-leftLogo">
				<view class="stores-item-leftLogo-top">
				<image :src="'https://elm.cangdu.org/img/'+shop.image_path" mode="aspectFill"></image>
				</view>
				<view class="stores-item-leftLogo-bottom">
					<!--占位-->
				</view>
			</view>	
			<view class="stores-item-rightContent">
				<view class="stores-item-rightContent-top">
				<view class="store-title">
					{{shop.name}}
				</view>
				<view class="store-firstLine">
					<view class="store-firstLine-evaluate">
						<image  class="store-firstLine-evaluate-rate" src="@/static/images/icon-rate.png" mode="aspectFill"></image><text>{{shop.rating}}</text>
					</view>
					<view class="store-firstLine-arrivalTime">
						<text>{{shop.order_lead_time}}</text>
						<text>{{shop.distance}}</text>
					</view>
				</view>
				<view class="store-secondLine">
					起送<text>￥{{shop.float_minimum_order_amount}}</text>配送<text>￥{{shop.float_delivery_fee}}</text>
					<!-- 人均<text>￥0</text> -->
				</view>
				</view>
				<view class="stores-item-rightContent-bottom">
				   <span v-show="page==='index'?true:false">更多活动尽请期待</span>
				   <view v-show="page==='detail'?true:false" 
				   class="stores-item-rightContent-bottom_products">
				   	<image src="/static/images/tea.jpg" mode="aspectFill"></image>
					<image src="/static/images/tea.jpg" mode="aspectFill"></image>
					<image src="/static/images/tea.jpg" mode="aspectFill"></image>
				   </view>
				</view>
			</view>
		</view>
		</navigator>
	</view>
	
</template>

<script>
	export default {
		props:{
			index:Number,
			page:String,
			shop:''
		},
		methods:{
			detail(id){
				//跳转详情页面
				// url:'../pages/storeDetail/index',
				// let pages = getCurrentPages()
				// let page = (pages[pages.length - 1]).route
				// if(page==='pages/index/index'){
				// 	uni.navigateTo({
				// 		url:'/pages/storeDetail/index?shopId='+id
				// 	})
				// }else {
				// 	uni.navigateTo({
				// 		url:'../../storeDetail/index?shopId='+id
				// 	})
				// }
				
				uni.navigateTo({
					 url: '/pages/storeDetail/index?shopId='+id
				});
				
			}
			
		}
	}
</script>

<style lang="scss">
	//store布局
	.stores-item {
		    min-height: 85px;
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
					min-height: 30px;
				}
			}
			&-rightContent {
				width: 77%;
				min-height: 85px;
				&-top {
					height: 50px;
				}
				&-bottom {
					font-size: 12px;
					padding-top: 5px;
					min-height: 30px;
					//更新图片
					&_products {
						padding-top: 10px;
						display: flex;
						justify-content: space-between;
						&>image {
							width: 80px;
							height: 100px;
							border-radius: 8px;
						}
					}
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
				 height: 21px;
				 overflow: hidden;
			 }
			 &-firstLine {
				 height: 18px;
				 // background-color: #007AFF; 
				 font-size: 12px;
				 display: flex;
				 &-evaluate {
					 width: 20%;
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
					 width: 80%;
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
