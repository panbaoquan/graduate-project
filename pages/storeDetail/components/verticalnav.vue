<template>
	<view>
		<!--中间轮播-->
		<swiper class="mySwiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in 4" :key="index">
				<image :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+ '.jpg'" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="VerticalBox">
			<!--左边滚动条-->
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					Tab-{{item.name}}
				</view>
			</scroll-view>
			<!--右边内容-->
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> Tab-{{item.name}}</view>
					</view>
					<view class="cu-list menu-avatar">
						<!--我添加的-->
					  <view class="myList">
						  <view class="myList_left">
						  	<view class="myList_left_img">
						  		<image src="@/static/images/shops/goodsImg.jpg" mode="aspectFill"></image>
						  	</view>
							<!--占位-->
							<view class="myList_left_xxx">
								
							</view>
						  </view>
						  <view class="myList_right">
						  	<view class="myList_right_title">
						  		商店名称
						  	</view>
							<view class="myList_right_ad">
								味道好急寥
							</view>
							<view class="myList_right_other">
								<view class="myList_right_other_share">
									月售<span>100</span>份
								</view>
								<view class="myList_right_other_evaluate">
									好评率<span>90</span>%
								</view>
							</view>
							<view class="myList_right_activity">
								更多活动尽请期待
							</view>
							<view class="myList_right_btn">
								<view class="myList_right_btn_minprice">
									<span class="minprice">0</span><span style="color: red;">¥</span>元 
								</view>
								<view class="myList_right_btn_btns">
									<view class="add flexc bold" @tap="add($event,item.id)">+</view>
                      				<number-box></number-box>				
								</view>
							</view>
							
						  </view>
					  </view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!--购物车-->
		<view class="cart">
			<image id="cart" src="@/static/cart.png" mode="widthFix"></image>
		</view>
		<!-- 只需要绑定购物车位置即可 -->
		<flyInCart ref="inCart" :cartBasketRect="cartBasketRect"></flyInCart>
	</view>
</template>

<script>
	import flyInCart from './flyInCart.vue' 
	import numberBox from '@/components/uni-number-box/uni-number-box.vue'
	export default {
		data() {
			return {
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				cartBasketRect:{},
			};
		},
		created() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			let list = [{}];
			for (let i = 0; i < 15; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i+1;
			}
			this.list = list;
			this.listCur = list[0];
		},
		mounted() {
			uni.hideLoading()
			//我添加的
			const self = this
			let q = uni.createSelectorQuery()
			setTimeout(function(){
				q.select('#cart').boundingClientRect(data => {
				 self.cartBasketRect = data
				}).exec();
			},100)
			//我添加的
		},
		methods: {
			//我添加的
			 add(e,id){
				this.$refs.inCart.addToCart(e,id);
			 },
			//我添加的
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		},
		components:{
			flyInCart,
			numberBox
		}
	}
</script>
<style scoped lang="scss">
	.mySwiper {
		height: 100px
	}
	.mySwiper image,
	.mySwiper video,
	.mySwiper image,
	.mySwiper video {
		width: 100%;
		display: block;
		height: 100%;
		margin: 0;
		pointer-events: none;
	}
	.myList {
		width: 100%;
		min-height: 150px;
		background: #FFF;
		position: relative;
		display: flex;
		&_left{
			width: 60px;
			
			&_img {
				width: 100%;
				height: 60px;
				outline: 1px solid yellow;
				&>image {
					width: 100%;
					height: 100%;
				}
			}
		}
		&_right{
			padding-left: 4px;
			flex: 1;
			outline: 1px solid skyblue;
			font-size: 12px;
			&>view{
				margin-bottom: 4px;
			}
			&_title {
				font-size: 16px;
				font-weight: 700;
			}
			&_ad {
				
			}
			&_other {
				display: flex;
				flex-flow: nowrap row;
				&_evaluate {
					padding-left: 4px;
				}
			}
			&_btn {
				&_minprice {
					letter-spacing: 1px;
					.minprice {
						font-size: 20px;
						color: red;
					}
				}
			}
		}
	}
	.list{
		padding-top: 50rpx;
	}
	.price{
		font-size: 30rpx;
		color: red;
	}
	.name{
		margin-bottom: 70rpx;
	}
	.flexs{
		display: flex;
		align-items: flex-start;
	}
	.flexc{
		display: flex;
		align-content: center;
		justify-content: center;
	}
	.add{
		background: #E54D42;
		color: #FFF;
		width: 50rpx;
		height: 50rpx;
		border-radius: 45%;
		position: absolute;
		right: 0;
		transition: all .13s;
		line-height: 50rpx;
	}
	.add:active{
		transform: scale(1.2);
	}
	.flex{
		display: flex;
		align-content: center;
	}
	.il{
		 
	}
	.il image{
		width: 160rpx;
		border-radius: 16rpx;
		margin-right: 20rpx;
	}
	.item{
		width: 90%;
		margin: 50rpx auto;
		position: relative;
	}
	.flex{
		display: flex;
		align-items: center;
	}
	.bold{
		font-weight: bold;
		font-size: 30rpx;
	}
	.cart{
		width: 96%;
		position: fixed;
		bottom: 20px;
		height: 45px;
		background: #EE3F4D;
		margin: auto;
		border-radius: 20px;
		left: 2%;
	}
	.cart image{
		width: 160rpx;
		position: absolute;
		bottom: 0;
		left: 5%;
	}
</style>
<style>
	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
