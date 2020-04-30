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
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-if="index<20?true:false" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<!--右边内容-->
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="myPadding" v-for="(item,index) in list" v-if="index<20?true:false" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text>{{item.name}}</view>
					</view>
					<view class="cu-list menu-avatar">
						<!--我添加的-->
					  <view class="myList" v-for="(item,index) in item.foods" :key="index">
						  <view class="myList_left">
						  	<view class="myList_left_img">
						  		<!-- <image src="@/static/images/shops/goodsImg.jpg" mode="aspectFill"></image> -->
								<image :src="'//elm.cangdu.org/img/'+item.image_path" mode="aspectFill" />
						  	</view>
							<!--占位-->
							<view class="myList_left_xxx">
								
							</view>
						  </view>
						  <view class="myList_right">
						  	<view class="myList_right_title">
						  		{{item.name}}
						  	</view>
							<view class="myList_right_ad">
								{{item.description}}
							</view>
							<view class="myList_right_other">
								<view class="myList_right_other_share">
									月售<span>{{item.month_sales}}</span>份
								</view>
								<view class="myList_right_other_evaluate">
									评分<span>{{item.rating}}</span>
								</view>

							</view>
							<view class="myList_right_activity">
								更多活动尽请期待
							</view>
							<!--加减按钮-->
							<view class="myList_right_btn">
								<view class="myList_right_btn_minprice">
									<span class="minprice">{{item.specfoods[0].price}}</span><span style="color: red;">¥</span>元 
								</view>
								<view class="myList_right_btn_btns">
									<!-- <Counter :id="item.id" :rect="cartBasketRect"/> -->
									<view class="minus" @tap="minus(item)">-</view>
									 <viwe class="counter">{{item.__v}}</viwe>
									<view class="add flexc bold" @tap="add($event,index+1,item)">+</view>
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
			<view class="total"><span>{{Total}}</span><span style="font-size:14px">¥元</span></view>
	        <view class="settlement" @tap="goAplay()" :class="[Total?'':'disabledBtn']">去结算</view>
		</view>
		<!-- 只需要绑定购物车位置即可 -->
		<flyInCart ref="inCart" :cartBasketRect="cartBasketRect"></flyInCart>
	</view>
</template>
<script>
	import flyInCart from './verticlnav/flyInCart'
	import numberBox from '@/components/uni-number-box/uni-number-box.vue'
	import Counter from './verticlnav/counter'
	export default {
		props:{
			dataList:{
				default:''
			},
			shopInfo:''
		},
		data() {
			return {
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				cartBasketRect:{},
				counter:0,
				Total:0,
				goods:[
					{id:1,name:'商品名称1',ad:'味道好急寥',share:100,evaluate:'90',price:10.5,count:0},
					{id:2,name:'商品名称2',ad:'味道好急寥',share:80,evaluate:'95',price:12,count:0},
					{id:3,name:'商品名称3',ad:'味道好急寥',share:120,evaluate:'92',price:11,count:0}
				],
				cartList:[]
				
			};
		},
		created() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			//初始化list
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
			//去重
			unique(arr) {
            // 创建一个Map对象实例
            const res = new Map() 
            // 过滤条件：如果res中没有某个键，就设置这个键的值为1
            return arr.filter((arr) => !res.has(arr.id) && res.set(arr.id, 1))
			},
			
			//去支付
			goAplay(){
				if(this.Total) {
				 let cart = this.unique(this.cartList)
				 for(let i=0;i<cart.length;i++){
					 cart[i].count = 0
				 }
				 for(let i=0;i<cart.length;i++){
					 for(let j=0;j<this.cartList.length;j++){
						 if(cart[i].id==this.cartList[j].id){
							 cart[i].count++
						 }
					 }
				 }
				 //存取cart 到localStorage
				uni.setStorageSync('list',JSON.stringify(cart))
				//存取total 到localStorag
				uni.setStorageSync('total',this.Total)
				//存取
				let shop = {id:this.shopInfo.id,name:this.shopInfo.name,image_path:this.shopInfo.image_path}
				
				uni.setStorageSync('shopInfo',JSON.stringify(shop))

				let testCart =[{
					attrs: [],
					extra: {},
					id: 24492,
					name: "苹果",
					packing_fee: 0,
					price: 20,
					quantity: 1,
					sku_id: 24465,
					specs: ["默认"],
					stock: 1000
				}]
				//下单信息请求
				// uni.request({
				// 	url:'https://elm.cangdu.org/v1/carts/checkout',
				// 	//url: this.$store.state.baseUrl+'/v1/carts/checkout',
				// 	method:'POST', 
				// 	data: {
				// 		come_from: "web",
				// 		restaurant_id:'3276',
				// 		geohash: "31.22299,121.36025",
				// 		entities:[testCart]
				// 	},
				// 	success: (res) => {
				// 		console.log(res.data);
				// 	}
				// });
                 
				//跳转
				uni.navigateTo({
					url: '/pages/aplay/index',
				});
				
				}
				 
			},
			//我添加的
			 add(e,id,goods){
				this.$refs.inCart.addToCart(e,id);
				//this.Total = price+this.Total
				//数量增加
				goods.__v++
				//单件货品moneny叠加
				this.Total = this.Total + goods.specfoods[0].price
				
				//加入购物车
				let data = {}
				data.id = goods._id
				data.name = goods.name
				data.price = goods.specfoods[0].price
				data.count = 1
				this.cartList.push(data)
				
			 },
			 //减去
			 minus(goods){
				//数量减少
				if(goods.__v>0){
					//单件货品moneny累减
					if(goods.__v){
					  this.Total = this.Total - goods.specfoods[0].price
					  goods.__v--
					}
                    
				}
				//从购物车里删除
				if(this.cartList){
					for(let i=0;i<this.cartList.length;i++){
						if(goods._id==this.cartList[i].id){
							this.cartList.splice(i,1)
							break;
						}
					}
				}
				
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
						//console.log(scrollTop)
						return false
					}
				}
			}
		},
		components:{
			flyInCart,
			numberBox,
			Counter
		},
		watch:{
			Total(val){
				this.Total = val
			},
			dataList(val){
				this.list = val
			}
		}
	}
</script>
<style scoped lang="scss">
    .disabledBtn {
		color: #e9e8e8!important;
		background-color: #BFBFBF!important;
	}
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
		min-height: 140px;
		background: #FFF;
		position: relative;
		display: flex;
		&_left{
			width: 60px;
			&_img {
				width: 100%;
				height: 60px;
				&>image {
					width: 100%;
					height: 100%;
				}
			}
		}
		&_right{
			padding-left: 4px;
			flex: 1;
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
				display: flex;
				&_minprice {
					letter-spacing: 1px;
					.minprice {
						font-size: 20px;
						color: red;
					}
				}
				&_btns{
					flex: 1;
					display: flex;
					justify-content: flex-end;
					padding-right: 5px;
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
	.add,.minus{
		background: #E54D42;
		color: #FFF;
		width: 50rpx;
		height: 50rpx;
		border-radius: 45%;
		transition: all .13s;
		line-height: 45rpx;
	}
	.minus{
		background-color: #FFF;
		border: 1px solid #ccc;
		color: black;
		font-weight: bold;
		font-size: 19px;
		line-height: 19px;
		text-align: center;
	}
	.add:active,.minus:active{
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
		bottom: 0;
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
	.counter {
	font-size: 17px;
    padding: 0 10px;
    line-height: 27px;
	}
	.myPadding{
		padding:12px 10px 0 10px;
		&>view:nth-child(1){
			border-top-left-radius: 12px;
			border-top-right-radius: 12px;
		}
		&>view:nth-child(2){
			border-bottom-left-radius: 12px;
			border-bottom-right-radius: 12px;
		}
	}
	.total {
    position: absolute;
    width: 100px;
    height: 45px;
    left: 90px;
	font-size: 22px;
    text-align: center;
    line-height: 45px;
	color: #FFF;
	letter-spacing: 1px;
	}
	.settlement {
		position: absolute;
		width: 100px;
    height: 45px;
    right: 0px;
	font-size: 18px;
    text-align: center;
    line-height: 45px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	color: #E54D42;
	letter-spacing: 1px;
	background-color: #F8CB00;
	font-weight: 500;
	
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
		padding-bottom: 50px;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
