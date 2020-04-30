<!--订单详情页-->
<template>
	<view class="detail">
	<cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
      <block slot="backText">
        <view class="goBack"></view>
      </block>
	  <Icon icon="icon-fanhui" />
      <block slot="content">订单详情</block>
    </cu-custom>
	<view class="one">
		<view class="one_avatar">
			<image :src="'https://elm.cangdu.org/img/'+data.shopInfo.image_path" mode="aspectFill" />
		</view>
		<view class="one_result"><text class="text-black text-bold">您的订单已支付成功</text></view>
		<view class="one_btn" @tap="orderMore(data.shopInfo.id)">再来一单</view>
	</view>
	<view class="two">
		<view class="two_shop" @tap="orderMore(data.shopInfo.id)">
			<view class="two_shop_left">
			   <image :src="'https://elm.cangdu.org/img/'+data.shopInfo.image_path" mode="aspectFill" />
			   <text style="padding-left:5px">{{data.shopInfo.name}}</text>
			</view>
			<view class="two_shop_right">
				<text class="cuIcon-right"></text>
			</view>
		</view>
		<view class="two_list" v-for="(item,index) in data.list" :key="index">
			<view class="two_list_left">{{item.name}}</view>
			<view class="two_list_right">
				<view class="two_list_right_quantity">× {{item.count}}</view>
				<view class="two_list_right_total">￥{{item.count*item.price}}</view>
			</view>
		</view>
		<view class="two_service">
			<view>配送费</view>
			<view>￥4</view>
		</view>
		<view class="two_service">
			<view>打包费</view>
			<view>￥3</view>
		</view>
		<view class="two_total">
			实付 {{data.total+7.00}}￥
		</view>
	</view>

	<view class="three">
		<view class="three_title">配送信息</view>
		<view class="three_item">
			<view class="three_item_name">送达时间：</view>
			<view class="three_item_data">尽快送达</view>
		</view>
		<view class="three_item">
			<view class="three_item_name">送货地址：</view>
			<view class="three_item_data">
				<p>{{data.address.address_detail}}{{data.address.address}}</p>
				<p>{{data.address.phone}} {{data.address.name}}</p>
			</view>
		</view>
		<view class="three_item">
			<view class="three_item_name">配送方式：</view>
			<view class="three_item_data"></view>
		</view>
	</view>

	<view class="three">
		<view class="three_title">订单信息</view>
		<view class="three_item">
			<view class="three_item_name">订单号：</view>
			<view class="three_item_data">{{data.id}}</view>
		</view>
		<view class="three_item">
			<view class="three_item_name">支付方式：</view>
			<view class="three_item_data">
				{{data.type}}
			</view>
		</view>
		<view class="three_item">
			<view class="three_item_name">下单时间：</view>
			<view class="three_item_data">{{data.time}}</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:''
			};
		},
		onLoad(option){
           this.data = JSON.parse(option.data)
		},
		methods:{
		orderMore(id){
           uni.navigateTo({
                url: '/pages/storeDetail/index?shopId='+id
           });
       },
		}
	}
</script>
<style lang="scss">
.detail {
 .cu-bar .action{
	align-items: flex-end;
}
.cu-bar .content {
   bottom: -70%;
}
}
</style>
<style lang="scss" scoped>
  .one {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  background-color: #FFF;
	  &>view {
		  margin-top: 15px;
	  }
	  &_avatar {
		  &>image{
			  width: 72px;
			  height: 72px;
			  border-radius: 50%;
		  }
	  }
	  &_result {
		  font-size: 18px;
	  }
	  &_btn {
		      width: 100px;
              text-align: center;
		        border: 1px solid #ee3f4d;
                border-radius: 3px;
                color: #ee3f4d;
                padding: 3px 15px;
				margin-bottom: 10px;
               
	  }
  }
  .two {
	  background-color: #FFF;
	  padding: 0 10px;
	  margin: 10px 0;
	  &_shop {
		  display: flex;
		  justify-content: space-between;
		  align-items: center;
		  border-bottom: 1px solid rgba(0,0,0,0.1);
		  &_left {
			   display: flex;
			   align-items: center;
			   
			  &>image {
                width: 30px;
			    height: 30px;
			  }
			  &>text {
				  font-size: 16px;
				  font-weight: 500;
				  font-weight: bold;
			  }
		  }
		  &_right {
		  }
	  }
	  &_list {
		  display: flex;
		  justify-content: space-between;
		  height: 40px;
		  align-items: center;
          &_left{}
		  &_right{
			  display: flex;
			  align-items: center;
			  &_quantity{
				  margin-right:20px
			  }
			  &_total{}
		  }
	  }
	  &_service {
		  display: flex;
		  justify-content: space-between;
		  height: 40px;
		  line-height: 40px;
	  }
	  &_total {
		  height: 40px;
		  line-height: 40px;
		  text-align: right;
		  font-size: 16px;
          color: #f60;
          font-weight: 700;
	  }
  }
  .three {
	  padding: 0 10px;
	  background-color: #FFF;
	  margin-bottom: 10px;
	  &_title {
		  font-size: 17px;
          height: 40px;
		  line-height: 40px;
	  }
	  &_item {
		  display: flex;
		  min-height: 40px;
		  line-height: 40px;
		  color: #666;
		  &_name {
			  
		  }

	  }
  }
</style>
