<template>
  <view class="order">
    <view class="shop">
      <view class="shop_img"></view>
      <view class="shop_name">商店名称</view>
    </view>
    <view class="list">
      <view class="goodsList" v-for="item in list" :key="item.id">
        <view class="goodsList_name">{{item.name}}</view>
        <view class="goodsList_numbers">× {{item.count}}</view>
        <view class="goodsList_price">￥{{item.price}}</view>
      </view>
      <view class="list_deliveryFee">
        <view class="list_deliveryFee_name">配送费</view>
        <view>￥4</view>
      </view>
      <view class="list_deliveryFee">
        <view class="list_deliveryFee_name">包装费</view>
        <view>￥3</view>
      </view>
      <view class="list_total">
        <span>小计</span>
        ￥
        <span>{{total}}</span>
      </view>
    </view>
    <!-- <view class="other">
        	  <view class="cu-form-group margin-top">
	  	<view class="title">支付方式</view>
	  	<picker @change="PickerChange" :value="index" :range="picker">
	  		<view class="picker">
	  			{{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
	  		</view>
	  	</picker>
	  </view>
    </view>-->
    <view class="cart">
      <view class="cart_total">
        <span style="font-size:17px">待支付:</span>
        <span>{{total}}</span>
        <span style="font-size:14px">¥元</span>
      </view>
      <view class="cart_settlement" @tap="confirm">确认支付</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    total: {
      defalut: 0
    },
    list: {
      defalut: [
        { id: 1, name: "德和衡好-但是-送达-为-发", count: "1", price: "10" },
        { id: 2, name: "123", count: "2", price: "13" },
        { id: 3, name: "123", count: "1", price: "12" }
      ]
    }
  },
  data() {
    return {
      index: 1,
      other: [
        { id: 1, name: "订单备注", content: ["点击可选择无接触配送", "xxx"] },
        { id: 2, name: "发票信息", content: "" },
        { id: 3, name: "号码保护" }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.total= parseFloat(this.total) + 7;
  },
  watch: {},
  methods: {
    PickerChange(e) {
      this.index = e.detail.value;
    },
    confirm() {
      let url = "/pages/aplay/confirm/confirm?total=" + this.total;
      uni.navigateTo({
        url: url
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.order {
  margin-top: 10px;
  background-color: #fff;
}
.shop {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
  &_img {
    width: 40px;
    height: 40px;
    border: 1px solid red;
    margin-left: 10px;
  }
  &_name {
    padding-left: 5px;
    font-weight: 500;
  }
}
.list {
  padding: 0 10px;

  &_deliveryFee {
    text-align: left;
    height: 40px;
    line-height: 40px;
    display: flex;
    & > view {
      width: 50%;
    }
    & > view:nth-child(2) {
      text-align: right;
    }
  }
  &_total {
    text-align: right;
    height: 40px;
    line-height: 40px;
    & > span:nth-child(2) {
      font-size: 20px;
      font-weight: 500;
    }
  }
}
.goodsList {
  display: flex;
  min-height: 40px;
  line-height: 40px;
  &_name {
    width: 60%;
  }
  &_numbers {
    width: 20%;
    text-align: right;
    color: salmon;
  }
  &_price {
    width: 20%;
    text-align: right;
  }
}
.cart {
  width: 96%;
  position: fixed;
  bottom: 0;
  height: 45px;
  background: #ee3f4d;
  margin: auto;
  border-radius: 20px;
  left: 2%;
  &_total {
    position: absolute;
    width: 100%;
    height: 45px;
    left: 21px;
    font-size: 20px;
    text-align: left;
    line-height: 45px;
    color: #fff;
    letter-spacing: 1px;
  }
  &_settlement {
    position: absolute;
    width: 100px;
    height: 45px;
    right: 0px;
    font-size: 18px;
    text-align: center;
    line-height: 45px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #436f1a;
    background-color: #f8cb00;
  }
}
</style>
